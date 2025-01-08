"use client";

import Pagination from "../common/Pagination";
import React, { useEffect, useState } from "react";
import useFetchNewsWeekly from "@/app/apis/useNewsWeekly";
import WeeklyNewsList from "./list/WeeklyNewsList";
import WeeklyRecentNews from "./list/WeeklyRecentNews";
import useFetchNewsWeeklyRecent from "@/app/apis/useNewsWeeklyRecent";
import { useRouter, useSearchParams } from "next/navigation";
import { parse } from "path";

export default function NewsWeeklyPagination() {
  const router = useRouter();
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

  useEffect(() => {
    router.push(`/news/weekly?page=${currentPage}`);
  }, [currentPage, router]);

  const totalPages = Math.ceil((weeklyData?.count || 0) / itemPerPage);
  if (isWeeklyLoading || isWeeklyRecentDataLoading)
    return <div>로딩 중입니다!</div>;

  return (
    <div className="w-full relative">
      <div className="flex justify-between ">
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
