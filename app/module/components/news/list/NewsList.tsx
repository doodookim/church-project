"use client";

import { INewsList } from "@/utils/types/newsData";
import Link from "next/link";
import React from "react";

interface INewsListProps {
  data: INewsList | undefined;
  isLoading: boolean;
}
export default function NewsList({ data, isLoading }: INewsListProps) {
  if (!data?.results.length) {
    return <div>아직 작성된 소식이 없어요</div>;
  }
  if (isLoading) return <div>로딩 중입니다</div>;
  return (
<<<<<<< HEAD
    <div>
      <h2 className="text-[#578FCC] text-2xl font-bold">교회소식</h2>
      <div className="border-y-2 mt-[40px] border-solid border-[#578FCC]">
        {data?.results.map((news) => (
          <div key={news.id}>
            <Link
              href={`/news/${news.id}`}
              className="flex justify-between items-center text-center border-b  p-[22px] cursor-pointer"
            >
              <div className="flex items-center gap-[50px]">
                <div className="font-medium text-base">{news.id}</div>
                <h2 className="text-base font-semibold text-[#202020]">
                  {news.title}
                </h2>
              </div>
              {news.notification && (
                <span className=" text-[#578FCC] rounded-[5px] text-sm border-[#578FCC] border-solid border-2 text-center py-[3px] px-2 font-bold">
                  공지
                </span>
              )}
              <p className="flex text-[#ABABAB] text-base font-medium ">
                {news.date}
              </p>
            </Link>
          </div>
        ))}
      </div>
=======
    <div className="border-y-2 mt-[40px]">
      {data?.results.map((news) => (
        <div key={news.id}>
          <Link
            href={`/news/${news.id}`}
            className="flex justify-between items-center text-center border-b boder-gray-200 pb-4 cursor-pointer hover:bg-gray-50 p-4 rounded"
          >
            <div className="flex items-center gap-[30px] ">
              {news.notification ? (
                <span className="border-[2px] border-[#578fcc] text-[#578fcc]  rounded-[5px] px-3 py-1 text-[14px] font-bold">
                  공지
                </span>
              ) : (
                <div>{news.id}</div>
              )}
              <h2 className="text-lg font-medium">{news.title}</h2>
            </div>

            <p className="flex text-gray-600 text-sm ">{news.date}</p>
          </Link>
        </div>
      ))}
>>>>>>> a37147b763a15e83d7ff116b5eac55635f7b881c
    </div>
  );
}
