"use client";

import useMainCarousel from "@/app/apis/useMainCarousel";
import { useCarouselStore } from "@/store/useCarouselStore";
import Image from "next/image";
import Pagination from "../common/Pagination";
import LoadingSpinner from "../common/LoadingSpinner";
import clsx from "clsx";
import CarouselPagination from "./pagination/CarouselPagination";

export default function MainCarousel() {
  const { data, isLoading } = useMainCarousel();
  const { currentIndex, setCurrentIndex } = useCarouselStore();

  if (isLoading)
    <div>
      <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
    </div>;
  if (!data) return null;

  const totalCarouselPage = Math.min(data.length, 4);

  return (
    <div className="relative w-full ">
      <ul className="relative w-full h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] aspect-video ease-in-out">
        {data.map(({ id, image_files }, index) => (
          <li
            key={id}
            className={clsx(
              "absolute top-0 left-0 w-full h-full transition-all duration-300",
              index === currentIndex && `translate-x-0`,
              index > currentIndex && `translate-x-[100%]`,
              index < currentIndex && `translate-x-[-100%]`
            )}
          >
            <Image
              src={image_files}
              alt="메인캐러셀"
              fill
              style={{ objectFit: "cover" }}
            />
          </li>
        ))}
      </ul>
      <CarouselPagination
        currentPage={currentIndex + 1}
        totalPages={totalCarouselPage}
        onPageChange={(page) => setCurrentIndex(page - 1)}
      />
    </div>
  );
}
