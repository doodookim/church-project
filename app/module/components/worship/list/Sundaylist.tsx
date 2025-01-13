"use client";

import { ISundayList } from "@/utils/types/sunday";
import Link from "next/link";

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
  if (!data?.results.length) {
    return <div>아직 작성된 소식이 없어요</div>;
  }
  if (isLoading) return <div>로딩 중입니다</div>;
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
              <div key={sunday.id} className="relative w-[200px] h-[200px]">
                <iframe
                  width="100%"
                  height="100%"
                  src={getYoutubeUrlId(sunday.url)}
                  title="sunday-worship"
                  allow="autoplay;"
                  allowFullScreen
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
