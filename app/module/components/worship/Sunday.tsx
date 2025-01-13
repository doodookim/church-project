"use client";

import useSundayData from "@/app/apis/useSundayData";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import SundayList from "./list/Sundaylist";

export default function Sunday() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultPage = 1;
  const itemsPerPage = 6;
  const getParsedPage = (): number => {
    const getPage = searchParams.get("page");
    if (!getPage) return defaultPage;
    const parsedPage = parseInt(getPage, 10);
    if (isNaN(parsedPage) || parsedPage < 1) return defaultPage;
    return parsedPage;
  };

  const [currentPage, setCurrentPage] = useState(getParsedPage);
  const { data, isLoading } = useSundayData(currentPage);
  const totalPages = Math.ceil((data?.count || 0) / itemsPerPage);

  useEffect(() => {
    router.push(`/worship/?page=${currentPage}`);
  }, [currentPage, router]);
  if (isLoading) return <div>로딩 중입니다</div>;
  return (
    <div>
      <SundayList data={data} isLoading={isLoading} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
