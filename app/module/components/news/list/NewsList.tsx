"use client";

import { INewsList } from "@/utils/types/newsData";
import React from "react";

interface NewsListProps {
  data: INewsList | undefined;
  moveToDetail: (newsid: number) => void;
}
export default function NewsList({ data, moveToDetail }: NewsListProps) {
  console.log(data);
  if (!data?.results.length) {
    return <div>아직 작성된 소식이 없어요</div>;
  }
  return (
    <div className="border-y-2 mt-[40px]">
      {data?.results.map((news) => (
        <div
          key={news.id}
          className="flex justify-between items-center text-center border-b boder-gray-200 pb-4 cursor-pointer hover:bg-gray-50 p-4 rounded"
          onClick={() => moveToDetail(news.id)}
        >
          <div className="flex items-center gap-[30px] ">
            <div>{news.id}</div>
            <h2 className="text-lg font-medium">{news.title}</h2>
          </div>
          {/* {news.notification || ""} */}
          <p className="flex text-gray-600 text-sm ">{news.date}</p>
        </div>
      ))}
    </div>
  );

  // return (
  //   <div>
  //     {data?.results.map((news) => (
  //       <div
  //         key={news.id}
  //         className="border-b-[1px] border-solid border-[#d9d9d9] cursor-pointer"
  //       >
  //         <h2>{news.title}</h2>
  //         <p>{news.date}</p>
  //         <div>{news.notification ? "공지" : ""}</div>
  //       </div>
  //     ))}
  //     {data?.next}
  //   </div>
  // );
}
