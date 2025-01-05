"use client";

import useFetchNews from "@/app/apis/useNewsData";
import React, { useEffect, useState } from "react";
import NewsList from "./list/NewsList";
import Pagination from "../common/Pagination";
import { useRouter } from "next/navigation";

export default function NewsPagination() {
  const router = useRouter();
  // 첫 페이지를 1번으로 지정.
  const [currentPage, setCurrentPage] = useState(1);
  // 페이지당 나와야 하는 데이터 수
  const itemsPerPage = 10;
  const { data, isLoading } = useFetchNews(currentPage);
  // 전체 페이지 수
  const totalPages = Math.ceil((data?.count || 0) / itemsPerPage);

  // 페이지 버튼 누를 때마다 해당 페이지로 이동
  useEffect(() => {
    router.push(`/news?page=${currentPage}`);
  }, [currentPage, router]);
  if (isLoading) return <div className="h-screen">로딩 중입니다.</div>;

  // 게시글 누르면 해당 게시글 id로 detail 페이지로 이동
  const moveToDetail = (newsid: number) => {
    router.push(`/news/${newsid}`);
  };

  return (
    <div>
      <NewsList data={data} moveToDetail={moveToDetail} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
