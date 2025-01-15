"use client";

import useMainCarousel from "@/app/apis/useMainCarousel";
import Image from "next/image";

export default function MainCarousel() {
  const { data, isLoading } = useMainCarousel();
  console.log(data);
  if (isLoading) <div>캐러셀 로딩 중입니다</div>;
  return (
    <div>
      {data?.map((carousel) => (
        <div key={carousel.id} className="w-full aspect-video">
          <Image
            src={carousel.image_files}
            alt="메인케러셀"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
