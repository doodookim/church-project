"use client";

import useFetchNotice from "@/app/apis/useNoticeData";
import Image from "next/image";
import Link from "next/link";

export default function MainSermonTime() {
  const { data, isLoading } = useFetchNotice();

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
