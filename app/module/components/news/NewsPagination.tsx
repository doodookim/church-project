"use client";

import useFetchNews from "@/app/apis/useNewsData";
import React, { useEffect, useState } from "react";
import NewsList from "./list/NewsList";
import Pagination from "../common/Pagination";
import { useRouter, useSearchParams } from "next/navigation";

export default function NewsPagination() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 첫 페이지를 1번으로 지정.
  const defaultPage = 1;
  // 페이지당 나와야 하는 데이터 수
  const itemsPerPage = 10;

  const getParsedPage = (): number => {
    const getPage = searchParams.get("page");
    if (!getPage) return defaultPage;
    const parsedPage = parseInt(getPage, 10);
    if (isNaN(parsedPage) || parsedPage < 1) return defaultPage;
    return parsedPage;
  };

  const [currentPage, setCurrentPage] = useState(getParsedPage);
  const { data, isLoading } = useFetchNews(currentPage);
  // 전체 페이지 수
  const totalPages = Math.ceil((data?.count || 0) / itemsPerPage);

  useEffect(() => {
    router.push(`/news?page=${currentPage}`);
  }, [currentPage, router]);
  if (isLoading) return <div className="h-screen">로딩 중입니다.</div>;
  return (
    <div>
      <NewsList data={data} isLoading={isLoading} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
