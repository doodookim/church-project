"use client";

import { INewsList } from "@/utils/types/newsData";
import React from "react";

interface INewsWeeklyListProps {
  data: INewsList | undefined;
  moveToDetail: (weeklyId: number) => void;
}

export default function WeeklyNewsList({
  data,
  moveToDetail,
}: INewsWeeklyListProps) {
  if (!data?.results.length) {
    return <div>아직 작성된 주보가 없어요</div>;
  }
  return (
    <div className="border-y-2 mt-[40px]">
      {data?.results.map((weekly) => (
        <div
          key={weekly.id}
          className="flex justify-between items-center text-center border-b boder-gray-200 pb-4 cursor-pointer hover:bg-gray-50 p-4 rounded"
          onClick={() => moveToDetail(weekly.id)}
        >
          <div className="flex items-center gap-[30px] ">
            <div>{weekly.id}</div>
            <h2 className="text-lg font-medium">{weekly.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
