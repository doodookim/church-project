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
    <div className="flex flex-col items-center">
      <div className="font-semibold flex bg-[#578FCC] text-xl text-[#ffffff] w-[120px] h-10 rounded-[22px] justify-center items-center mb-[14px]">
        교회소식
      </div>
      <div className="rounded-[15px] py-[38px] px-6 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
        {data?.map((mainNews) => (
          <Link
            href={`/news/${mainNews.id}`}
            key={mainNews.id}
            className="flex justify-between  items-center py-4  gap-4 border-b border-[#ABABAB] last:border-b-0"
          >
            <p className="text-lg leading-7 w-[171px] whitespace-nowrap overflow-hidden text-ellipsis font-medium">
              {mainNews.title}
            </p>
            <span className="text-[#ababab] text-base font-medium">
              {mainNews.date}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
