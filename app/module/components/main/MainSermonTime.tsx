"use client";

import useFetchNotice from "@/app/apis/useNoticeData";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "../common/LoadingSpinner";

export default function MainSermonTime() {
  const { data, isLoading } = useFetchNotice();
  if (isLoading) {
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
  }
  if (!data?.length) return null;
  console.log(data);
  return (
    <div className="w-full h-full ">
      {data?.map((WorshipTime) => (
        <Link
          key={WorshipTime.worship_time_img.id}
          href={`/notice`}
          className="block w-full h-full relative "
        >
          <Image
            src={WorshipTime.worship_time_img.image_files}
            alt="예배 시간"
            fill
            className="object-cover rounded-[15px] shadow-[0_4px_4px_rgba(0,0,0,0.2)]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Link>
      ))}
    </div>
  );
}
