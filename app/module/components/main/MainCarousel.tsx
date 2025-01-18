"use client";

import useMainCarousel from "@/app/apis/useMainCarousel";
import { useCarouselStore } from "@/store/useCarouselStore";
import Image from "next/image";
import Pagination from "../common/Pagination";
import LoadingSpinner from "../common/LoadingSpinner";

export default function MainCarousel() {
  const { data, isLoading } = useMainCarousel();
  const { currentIndex, setCurrentIndex } = useCarouselStore();

  if (isLoading)
    <div>
      {" "}
      <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
    </div>;
  if (!data) return null;

  const totalCarouselPage = Math.min(data.length, 4);

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentIndex(page - 1);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="max-w-[1024px] mx-auto aspect-video transition-transform duration-300 ease-in-out">
          {data[currentIndex] && (
            <Image
              src={data[currentIndex].image_files}
              alt="메인캐러셀"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}
