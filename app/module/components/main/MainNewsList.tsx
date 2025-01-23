"use client";

import useMainNewsData from "@/app/apis/useMainNewsData";
import LoadingSpinner from "../common/LoadingSpinner";
import Link from "next/link";

export default function MainNewsList() {
  const { data, isLoading } = useMainNewsData();
  if (isLoading)
    return (
      <div>
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex bg-[#578FCC] font-bold sm:text-sm lg:text-lg xl:text-lg text-[#ffffff] w-[120px] h-[40px] rounded-[22px] justify-center items-center">
        교회소식
      </div>
      <div className="w-full h-[300px] sm:h-[300px] xl:h-full border rounded-[15px] mt-[14px] px-[22px] py-[38px]">
        {data?.map((mainNews) => (
          <Link
            href={`/news/${mainNews.id}`}
            key={mainNews.id}
            className="flex justify-between items-center py-3 sm:py-4 xl:p-[30px] border-b last:border-b-0"
          >
            <p className="text-[18px] flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
              {mainNews.title}
            </p>
            <span className="text-[#ababab] text-[18px] whitespace-nowrap">
              {mainNews.date}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
