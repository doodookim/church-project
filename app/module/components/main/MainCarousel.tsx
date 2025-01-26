"use client";

import { useCarouselStore } from "@/store/useCarouselStore";
import Image from "next/image";
import clsx from "clsx";
import CarouselPagination from "./pagination/CarouselPagination";
import { IimageData } from "@/utils/types/churchData";
import { useEffect, useState } from "react";
import LoadingSpinner from "../common/LoadingSpinner";

interface IMainCarouselProps {
  carousel: IimageData[];
}

export default function MainCarousel({ carousel }: IMainCarouselProps) {
  const { currentIndex, setCurrentIndex } = useCarouselStore();

  if (!carousel || carousel.length === 0) return null;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (carousel.length > 0) {
      setIsLoading(false);
    }
  }, [carousel]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <LoadingSpinner boxSize={5} ballSize={0.5} color="#578fcc" />
      </div>
    );
  }

  const totalCarouselPage = Math.min(carousel.length, 4);

  return (
    <div className="relative w-full ">
      <ul className="relative w-full selection:h-[300px] ss:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] aspect-video ease-in-out">
        {carousel.map(({ id, image_files }, index) => (
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
