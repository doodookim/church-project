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
      <div className="w-full  rounded-[15px] py-[38px] px-4 shadow-[0_0_10px_rgba(0,0,0,0.2)] ">
        {data?.map((mainNews) => (
          <Link
            href={`/news/${mainNews.id}`}
            key={mainNews.id}
            className="flex justify-between items-center  border-b border-[#ABABAB] last:border-b-0 py-4 last:pb-0
            first:pt-0"
          >
            <p
              className="lg:text-lg  lg:w-[171px] whitespace-nowrap overflow-hidden text-ellipsis font-medium
            md:text-base text-sm"
            >
              {mainNews.title}
            </p>
            <span className="text-[#ababab] lg:text-base whitespace-nowrap overflow-hidden text-ellipsis font-medium md:text-base text-sm">
              {mainNews.date}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
