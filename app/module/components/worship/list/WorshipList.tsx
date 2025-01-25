"use client";

import { ISermonList } from "@/utils/types/sermonData";
import Link from "next/link";
import LoadingSpinner from "../../common/LoadingSpinner";

interface IWorshipProps {
  data: ISermonList | undefined;
  isLoading: boolean;
  currentCategory: string;
}

export default function WorshipList({
  data,
  isLoading,
  currentCategory,
}: IWorshipProps) {
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
    <div className="mt-10">
      <div className="grid grid-cols-1 ss:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-10">
        {data.results.map((sermon) => (
          <div key={sermon.id}>
            <Link
              href={`/worship/${sermon.id}?category=${currentCategory}`}
              className="flex flex-col items-center  cursor-pointer"
            >
              <div className="relative mb-[30px] w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={getYoutubeUrlId(sermon.url)}
                  title="sermonVideo"
                  allow="autoplay;"
                  allowFullScreen
                  className="rounded-[10px]"
                />
              </div>
              <div className="w-full flex flex-col gap-[10px]">
                <h3 className="text-lg text-black">{sermon.title}</h3>
                <p className="text-lg text-black">{sermon.verse}</p>
                <p className="text-[#ABABAB]">{sermon.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
