"use client";

import Pagination from "../common/Pagination";
import React, { useState } from "react";
import useFetchNewsWeekly from "@/app/apis/useNewsWeekly";
import WeeklyNewsList from "./list/WeeklyNewsList";
import WeeklyRecentNews from "./list/WeeklyRecentNews";
import useFetchNewsWeeklyRecent from "@/app/apis/useNewsWeeklyRecent";
import { useSearchParams } from "next/navigation";
import LoadingSpinner from "../common/LoadingSpinner";
import useNavigatePage from "../../hooks/useNavigate";

export default function NewsWeeklyPagination() {
  const searchParams = useSearchParams();
  const defaultPage = 1;
  const itemPerPage = 10;
  const getParsedPage = (): number => {
    const getPage = searchParams.get("page");
    if (!getPage) return defaultPage;
    const parsedPage = parseInt(getPage, 10);
    if (isNaN(parsedPage) || parsedPage < 1) return defaultPage;
    return parsedPage;
  };
  const [currentPage, setCurrentPage] = useState(getParsedPage);

  // 각 자식 컴포넌트로 데이터 내려주기 위해서 데이터 독립 요청 처리
  // 최신 주보 데이터 요청
  const { data: weeklyRecentData, isLoading: isWeeklyRecentDataLoading } =
    useFetchNewsWeeklyRecent();
  // 주보 데이터 요청
  const { data: weeklyData, isLoading: isWeeklyLoading } =
    useFetchNewsWeekly(currentPage);

  // 페이지 네비게이션 커스텀 훅
  useNavigatePage({
    baseUrl: "/news/weekly",
    queryParams: { page: currentPage.toString() },
  });

  const totalPages = Math.ceil((weeklyData?.count || 0) / itemPerPage);
  if (isWeeklyLoading || isWeeklyRecentDataLoading)
    return (
      <div className="flex flex-col justify-center items-center">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );

  return (
    <div className="w-full relative">
      <h2 className="text-[#578FCC] text-2xl mb-10">이주의 주보</h2>
      <div className="flex flex-col ss:flex-row gap-4">
        <WeeklyRecentNews
          data={weeklyRecentData}
          isLoading={isWeeklyRecentDataLoading}
        />
        <WeeklyNewsList data={weeklyData} isLoading={isWeeklyLoading} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
