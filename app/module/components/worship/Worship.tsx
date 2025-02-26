"use client";

import Pagination from "../common/Pagination";
import WorshipList from "./list/WorshipList";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSermonData, { sermonCategory } from "@/app/apis/useSermonData";
import useNavigatePage from "../../hooks/useNavigate";

export default function Worship() {
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

  //searchParams 변경 시 카테고리, 페이지 업데이트
  useEffect(() => {
    setCurrentCategory(getCategory());
    setCurrentPage(getParsedPage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const selectedCategories = {
    sundaySermon: "주일 예배",
    sundayWorshipSermon: "주일 찬양 예배",
    sundayEventSermon: "특별 예배",
  };

  const { data, isLoading } = useSermonData(currentCategory, currentPage);
  const totalPages = Math.ceil((data?.count || 0) / itemsPerPage);

  // 페이지 네비게이션 커스텀 훅
  useNavigatePage({
    baseUrl: "/worship",
    queryParams: { category: currentCategory, page: currentPage.toString() },
  });

  return (
    <div>
      <h2 className="text-2xl  text-[#578fcc]">
        {selectedCategories[currentCategory]}
      </h2>
      <WorshipList
        data={data}
        isLoading={isLoading}
        currentCategory={currentCategory}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
