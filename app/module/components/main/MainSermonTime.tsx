"use client";

import useFetchNotice from "@/app/apis/useNoticeData";
import LoadingSpinner from "../common/LoadingSpinner";
import Image from "next/image";
import Link from "next/link";

export default function MainSermonTime() {
  const { data, isLoading } = useFetchNotice();

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
  }

  if (!data?.length) return null;

  return (
    <div className="w-full h-full">
      {data?.map((WorshipTime, index) => (
        <Link
          key={index}
          href={`/notice`}
          className="block w-full h-full relative"
        >
          <Image
            src={WorshipTime.worship_time_img.image_files}
            alt="예배 시간"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Link>
      ))}
    </div>
  );
}
