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
    <div className="w-full flex flex-col items-center">
      <div className="flex bg-[#578FCC] font-bold text-lg text-[#ffffff] w-[120px] h-[40px] rounded-[22px] justify-center items-center">
        교회주보
      </div>
      <div className="w-full h-[300px] sm:h-[300px] xl:h-full border rounded-[15px] mt-[14px] px-[22px] py-[38px]">
        {data?.map((mainWeekly) => (
          <Link
            href={`/news/weekly/${mainWeekly.id}`}
            key={mainWeekly.id}
            className="flex justify-between py-3 sm:py-4 xl:p-[30px] items-center border-b last:border-b-0"
          >
            <p className="text-[18px] flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
              {mainWeekly.title}
            </p>
            <span className="text-[#ababab] text-[18px] whitespace-nowrap">
              {mainWeekly.date}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
