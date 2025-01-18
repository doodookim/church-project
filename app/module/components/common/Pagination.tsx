"use client";
import Image from "next/image";
import arrow_left from "@/public/assets/arrow-left.png";
import arrow_right from "@/public/assets/arrow-right.png";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: IPaginationProps) {
  // 최대 4개까지니까, 4로 나눈 다음에 올림해서 정수로 만들기
  const currentPageGroup = Math.ceil(currentPage / 4);
  // 현재페이지 그룹에서 1빼고 4개씩이니까 4 곱한 다음 그다음에 올 순서가 다음 그룹
  const currentPageGroupFirst = (currentPageGroup - 1) * 4 + 1;
  // 만약 그룹 마지막 페이지보다 데이터 수가 적다면 totalPages가 올 것;
  const currentPageGroupLast = Math.min(currentPageGroupFirst + 3, totalPages);
  const movePage = Array.from(
    {
      length: currentPageGroupLast - currentPageGroupFirst + 1,
    },
    (_, i) => currentPageGroupFirst + i
  );

  return (
    <div className="flex items-center justify-center gap-2 mt-8 h-[100px]">
      {/* 페이지 전 클릭 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-[22px] h-[22px] border border-[#D9D9D9] border-solid
          flex justify-center items-center "
      >
        <Image src={arrow_left} alt="화살표 왼쪽" />
      </button>

      {/* 페이지 숫자 1,2 나타내는곳 */}
      {movePage.map((page: any) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-[22px] h-[22px] text-sm 
            ${
              currentPage === page
                ? "bg-[#578FCC] text-white"
                : "border border-[#D9D9D9] border-solid text-[#ABABAB]"
            }`}
        >
          {page}
        </button>
      ))}

      {/* 페이지 다음 클릭*/}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-[22px] h-[22px] border border-[#D9D9D9] border-solid
          flex justify-center items-center "
      >
        <Image src={arrow_right} alt="화살표 오른쪽" />
      </button>
    </div>
  );
}
