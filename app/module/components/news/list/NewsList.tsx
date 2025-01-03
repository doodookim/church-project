"use client";

import useFetchNews from "@/app/apis/useNewsData";
import { INewsListResponse } from "@/utils/types/newsData";
import React from "react";

interface NewsListProps {
  data: INewsListResponse | undefined;
}
export default function NewsList({ data }: NewsListProps) {
  if (!data?.results.length) {
    return <div>아직 작성된 소식이 없어요</div>;
  }
  return (
    <div>
      {data?.results.map((news) => (
        <div
          key={news.id}
          className="border-b boder-gray-200 pb-4 cursor-pointer hover:bg-gray-50 p-4 rounded"
        >
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-lg font-medium">{news.title}</h2>
            {news.notification || ""}
          </div>
          <p className="text-gray-600 text-sm">{news.date}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {data?.results.map((news) => (
        <div
          key={news.id}
          className="border-b-[1px] border-solid border-[#d9d9d9] cursor-pointer"
        >
          <h2>{news.title}</h2>
          <p>{news.date}</p>
          <div>{news.notification ? "공지" : ""}</div>
        </div>
      ))}
      {data?.next}
    </div>
  );
}
