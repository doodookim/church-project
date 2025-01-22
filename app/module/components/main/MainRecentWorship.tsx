"use client";

import useMainWorshipData from "@/app/apis/useMainWorshipData";
import LoadingSpinner from "../common/LoadingSpinner";
import Link from "next/link";

export default function MainRecentWorship() {
  const { data, isLoading } = useMainWorshipData();

  const getYoutubeUrlId = (url: string) => {
    const videoId = url.split("live/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
  }

  if (!data?.results.length) return null;

  const recentSermon = data.results[0];
  return (
    <Link href={`/worship/${recentSermon.id}`} className="w-full h-full block">
      <iframe
        width="100%"
        height="100%"
        src={getYoutubeUrlId(recentSermon.url)}
        title="recentWorshipVideo"
        allow="autoplay"
        allowFullScreen
        className="rounded-lg w-full h-full"
      />
    </Link>
  );
}
