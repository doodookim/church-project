"use client";

import { INewsList } from "@/utils/types/newsData";
import Link from "next/link";
import React from "react";
import LoadingSpinner from "@/app/module/components/common/LoadingSpinner";

interface INewsListProps {
  data: INewsList | undefined;
  isLoading: boolean;
}
export default function NewsList({ data, isLoading }: INewsListProps) {
  if (!data?.results.length) {
    return <div>아직 작성된 소식이 없어요</div>;
  }
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
  return (
    <div>
      <h2 className="text-[#578FCC] text-2xl font-bold">교회소식</h2>
      <div className="border-y-2 mt-[40px] border-solid border-[#578FCC]">
        {data?.results.map((news) => (
          <div key={news.id}>
            <Link
              href={`/news/${news.id}`}
              className="flex justify-between items-center border-b p-[22px] cursor-pointer hover:bg-gray-50"
            >
              <div className="flex gap-[50px] items-center">
                <div className="w-[60px] flex items-center justify-center">
                  {news.notification ? (
                    <span className="text-[#578FCC] text-sm border-[#578FCC] border-solid border-2 rounded-[5px] py-[3px] px-2 font-bold">
                      공지
                    </span>
                  ) : (
                    <span className="font-medium text-base">{news.id}</span>
                  )}
                </div>
                <h2 className="text-base font-semibold text-[#202020] flex-1">
                  {news.title}
                </h2>
              </div>
              <p className="text-[#ABABAB] text-base font-medium w-[100px] text-center">
                {news.date}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
