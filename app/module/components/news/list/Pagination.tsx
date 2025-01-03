"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
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
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-[50px] h-[50px]"
      >
        이전
      </button>
      {movePage.map((page: any) => (
        <button key={page} onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-[50px] h-[50px]"
      >
        다음
      </button>
    </div>
  );
}
