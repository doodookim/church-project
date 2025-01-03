"use client";

import useFetchNews from "@/app/apis/useNewsData";
import React from "react";

export default function NewsList() {
  const { data, isLoading } = useFetchNews();
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        로딩 중...
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
