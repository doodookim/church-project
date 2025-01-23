import clsx from "clsx";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function CarouselPagination({
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
    <div className="flex items-center justify-center gap-2 mt-[40px] h-[50px]">
      <div className="px-[3px] py-[3px] bg-[#FFFFFF] rounded-[15px] text-white">
        {movePage.map((page: number) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={clsx(
              "w-[33px] h-[33px] text-lg rounded-[50%]",
              currentPage === page
                ? "bg-[#202020] text-white"
                : "text-[#ABABAB]"
            )}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
