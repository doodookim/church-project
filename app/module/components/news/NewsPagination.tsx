"use client";

import useFetchNews from "@/app/apis/useNewsData";
import React, { useState } from "react";
import NewsList from "./list/NewsList";
import Pagination from "../common/Pagination";
import { useSearchParams } from "next/navigation";
import LoadingSpinner from "../common/LoadingSpinner";
import useNavigatePage from "../../hooks/useNavigate";

export default function NewsPagination() {
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

  // 페이지 네비게이션 커스텀 훅
  useNavigatePage({
    baseUrl: "/news",
    queryParams: { page: currentPage.toString() },
  });

  if (isLoading)
    return (
      <div className="h-screen">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
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
