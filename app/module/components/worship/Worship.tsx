"use client";

import { useRouter } from "next/navigation";
import Pagination from "../common/Pagination";
import WorshipList from "./list/WorshipList";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSermonData, { sermonCategory } from "@/app/apis/useSermonData";

export default function Worship() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultPage = 1;
  const itemsPerPage = 6;

  //페이지네이션 위한 페이지 번호 파라미터 관리
  const getParsedPage = (): number => {
    const getPage = searchParams.get("page");
    if (!getPage) return defaultPage;
    const parsedPage = parseInt(getPage, 10);
    if (isNaN(parsedPage) || parsedPage < 1) return defaultPage;
    return parsedPage;
  };

  //카테고리 별 파라미터 관리
  const getCategory = () => {
    return (searchParams.get("category") ||
      "sundaySermon") as keyof typeof sermonCategory;
  };

  //현재 페이지 및 카테고리 state 값으로 관리
  const [currentPage, setCurrentPage] = useState(getParsedPage);
  const [currentCategory, setCurrentCategory] = useState(getCategory);

  const selectedCategories = {
    sundaySermon: "주일 예배",
    sundayWorshipSermon: "주일 찬양 예배",
    sundayEventSermon: "특별 예배",
  };

  const { data, isLoading } = useSermonData(currentCategory, currentPage);
  console.log(data);
  const totalPages = Math.ceil((data?.count || 0) / itemsPerPage);

  //다른 페이지 번호, 다른 카테고리 누를 때 누른 페이지나 카테고리로 라우팅
  useEffect(() => {
    router.push(`/worship/?category=${currentCategory}?page=${currentPage}`);
  }, [currentPage, currentCategory, router]);

  return (
    <div className="mt-[20px]">
      <h2 className="text-2xl font-bold mb-4 text-[#578fcc]">
        {selectedCategories[currentCategory]}
      </h2>
      <WorshipList data={data} isLoading={isLoading} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
