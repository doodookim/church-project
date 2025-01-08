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
    <div className="border-y-2 mt-[40px]">
      {data?.results.map((news) => (
        <div key={news.id}>
          <Link
            href={`/news/${news.id}`}
            className="flex justify-between items-center text-center border-b boder-gray-200 pb-4 cursor-pointer hover:bg-gray-50 p-4 rounded"
          >
            <div className="flex items-center gap-[30px] ">
              <div>{news.id}</div>
              <h2 className="text-lg font-medium">{news.title}</h2>
            </div>
            {news.notification && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                공지
              </span>
            )}
            <p className="flex text-gray-600 text-sm ">{news.date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
