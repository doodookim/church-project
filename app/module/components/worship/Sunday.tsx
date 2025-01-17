"use client";

import useSundayData from "@/app/apis/useSundayData";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import SundayList from "./list/Sundaylist";
import LoadingSpinner from "../common/LoadingSpinner";

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
  // if (isLoading)
  //   return (
  //     <div className="min-h-lvh mt-[100px] text-center align-center text-[30px]">
  //       <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
  //     </div>
  //   );
  return (
    <div className="mt-[20px]">
      주일예배
      <SundayList data={data} isLoading={isLoading} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
