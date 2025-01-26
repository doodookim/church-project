"use client";

import LoadingSpinner from "../common/LoadingSpinner";
import Link from "next/link";
import useMainNWeeklyData from "@/app/apis/useMainWeeklyData";

export default function MainWeekly() {
  const { data, isLoading } = useMainNWeeklyData();
  if (isLoading)
    return (
      <div>
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="font-semibold flex bg-[#578FCC] text-xl text-[#ffffff] w-[120px] h-10 rounded-[22px] justify-center items-center mb-[14px]">
        교회주보
      </div>
      <div className="w-full  rounded-[15px] px-4 py-[38px] shadow-[0_0_10px_rgba(0,0,0,0.2)]">
        {data?.map((mainWeekly) => (
          <Link
            href={`/news/weekly/${mainWeekly.id}`}
            key={mainWeekly.id}
            className="flex justify-between items-center  border-b border-[#ABABAB] last:border-b-0 py-4 last:pb-0
            first:pt-0"
          >
            <p
              className="lg:text-lg  lg:w-[171px] whitespace-nowrap overflow-hidden text-ellipsis font-medium
            md:text-base text-sm"
            >
              {mainWeekly.title}
            </p>
            <span className="text-[#ababab] lg:text-base font-medium md:text-base text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              {mainWeekly.date}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
