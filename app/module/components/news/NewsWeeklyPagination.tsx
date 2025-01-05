"use client";

import Pagination from "../common/Pagination";
import React, { useState } from "react";
import useFetchNewsWeekly from "@/app/apis/useNewsWeekly";
import WeeklyNewsList from "./list/WeeklyNewsList";
import { useRouter } from "next/navigation";
import WeeklyRecentNews from "./list/WeeklyRecentNews";

export default function NewsWeeklyPagination() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;
  const { data, isLoading } = useFetchNewsWeekly(currentPage);
  const totalPages = Math.ceil((data?.count || 0) / itemPerPage);
  if (isLoading) return <div>로딩 중입니다!</div>;

  const moveToDetail = (weeklyId: number) => {
    router.push(`/news/weekly/${weeklyId}`);
  };
  return (
    <div className="w-full relative">
      <div className="flex justify-between ">
        <WeeklyRecentNews moveToDetail={moveToDetail} />
        <WeeklyNewsList data={data} moveToDetail={moveToDetail} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
