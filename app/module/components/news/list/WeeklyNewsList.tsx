"use client";

import { INewsList } from "@/utils/types/newsData";
import Link from "next/link";
import React from "react";

interface INewsWeeklyListProps {
  data: INewsList | undefined;
  isLoading: boolean;
}

export default function WeeklyNewsList({ data }: INewsWeeklyListProps) {
  if (!data?.results.length) {
    return <div>아직 작성된 주보가 없어요</div>;
  }
  return (
    <div className="border-y-2 flex-grow border-y-sky-600 text-[#202020] text-base">
      {data?.results.map((weekly) => (
        <div key={weekly.id}>
          <Link
            href={`/news/weekly/${weekly.id}`}
            className="flex justify-between items-center text-center border-b boder-gray-200 cursor-pointer hover:bg-gray-50 py-[22px] rounded"
          >
            <div className="flex items-center gap-4 ">
              <div className="w-[50px] text-center">{weekly.id}</div>
              <h2 className="text-base min-w-0 truncate">{weekly.title}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
