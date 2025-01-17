"use client";

import { ISermonList } from "@/utils/types/sermonData";
import Link from "next/link";
import LoadingSpinner from "../../common/LoadingSpinner";

interface IWorshipProps {
  data: ISermonList | undefined;
  isLoading: boolean;
}

export default function WorshipList({ data, isLoading }: IWorshipProps) {
  const getYoutubeUrlId = (url: string) => {
    const videoId = url.split("live/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  if (isLoading) {
    return (
      <div className="min-h-lvh mt-[100px] text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
  }

  if (!data?.results.length) {
    return <div>아직 작성된 소식이 없어요</div>;
  }
  return (
    <div className="mt-[40px]">
      <div className="grid grid-cols-3 gap-6">
        {data.results.map((sermon) => (
          <div
            key={sermon.id}
            className="items-center text-center pb-4 cursor-pointer p-4 rounded"
          >
            <Link
              href={`/worship/${sermon.id}`}
              className="flex flex-col items-center gap-[30px]"
            >
              <div className="relative w-full h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={getYoutubeUrlId(sermon.url)}
                  title="worship-sermon"
                  allow="autoplay;"
                  allowFullScreen
                  className="rounded-[10px]"
                />
              </div>
              <div className="w-full flex flex-col justify-start text-left gap-2">
                <h3>{sermon.title}</h3>
                <p>{sermon.verse}</p>
                <p className="text-[#ababab]">{sermon.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
