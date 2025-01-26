"use client";

import Link from "next/link";
import { ISermonList } from "@/utils/types/sermonData";
import { useEffect, useState } from "react";
import LoadingSpinner from "../common/LoadingSpinner";

interface IRecentWorshipProps {
  recentWorship: ISermonList;
}

export default function MainRecentWorship({
  recentWorship,
}: IRecentWorshipProps) {
  const getYoutubeUrlId = (url: string) => {
    const videoId = url.split("live/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  if (!recentWorship?.results.length) return null;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (recentWorship !== null) {
      setIsLoading(false);
    }
  }, [recentWorship]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <LoadingSpinner boxSize={5} ballSize={0.5} color="#578fcc" />
      </div>
    );
  }

  const recentSermon = recentWorship.results[0];
  return (
    <Link
      href={`/worship/${recentSermon.id}`}
      className="w-full h-full block relative pt-[38%]"
    >
      <iframe
        width="100%"
        height="100%"
        src={getYoutubeUrlId(recentSermon.url)}
        title="recentWorshipVideo"
        allow="autoplay"
        allowFullScreen
        className="rounded-[15px] w-full h-full absolute top-0 left-0"
      />
    </Link>
  );
}
