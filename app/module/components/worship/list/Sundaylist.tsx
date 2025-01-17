"use client";

import { ISundayList } from "@/utils/types/sunday";
import Link from "next/link";
import LoadingSpinner from "../../common/LoadingSpinner";

interface ISundayProps {
  data: ISundayList | undefined;
  isLoading: boolean;
}

export default function SundayList({ data, isLoading }: ISundayProps) {
  // 예배 라이브 url id 추출하는 함수
  const getYoutubeUrlId = (url: string) => {
    const videoId = url.split("live/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };
  if (isLoading)
    return (
      <div className="min-h-lvh mt-[100px] text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
  if (!data?.results.length) {
    return <div>아직 작성된 소식이 없어요</div>;
  }
  return (
    <div className="mt-[40px]">
      <div className="grid grid-cols-3 gap-6">
        {data?.results.map((sunday) => (
          <div
            key={sunday.id}
            className="items-center text-center pb-4 cursor-pointer p-4 rounded"
          >
            <Link
              href={`/worship/${sunday.id}`}
              className="flex flex-col items-center gap-[30px] "
            >
              <div key={sunday.id} className="relative w-full h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={getYoutubeUrlId(sunday.url)}
                  title="sunday-worship"
                  allow="autoplay;"
                  allowFullScreen
                  className="rounded-[10px]"
                />
              </div>
              <div className="w-full flex flex-col justify-start text-left gap-2">
                <h3>{sunday.title}</h3>
                <p>{sunday.verse}</p>
                <p className="text-[#ababab]">{sunday.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
