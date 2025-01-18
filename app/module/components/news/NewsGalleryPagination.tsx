"use client";

import Pagination from "../common/Pagination";
import NewsGalleryList from "./list/NewsGalleryList";
import { useEffect, useState } from "react";
import useFetchGallery from "@/app/apis/useNewsGalleryData";
import { useRouter, useSearchParams } from "next/navigation";

export default function NewsGalleryPagination() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 최초 페이지 지정
  const defaultPage = 1;
  // 페이지 당 데이터 수 지정
  const itemPerPage = 6;

  // 페이지 새로고침 시 해당 페이지 렌더링 및 예외처리
  const getParsedPage = (): number => {
    const getPage = searchParams.get("page");
    if (!getPage) return defaultPage;
    const parsedPage = parseInt(getPage, 10);
    if (isNaN(parsedPage) || parsedPage < 1) return defaultPage;
    return parsedPage;
  };

  const [currentPage, setCurrentPage] = useState(getParsedPage);

  const { data, isLoading } = useFetchGallery(currentPage);

  useEffect(() => {
    router.push(`/news/gallery?page=${currentPage}`);
  }, [currentPage, router]);

  if (isLoading) return <div className="h-screen">로딩 중입니다.</div>;
  const totalPages = Math.ceil((data?.count || 0) / itemPerPage);

  return (
    <div>
      <div>
        <NewsGalleryList data={data} isLoading={isLoading} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
