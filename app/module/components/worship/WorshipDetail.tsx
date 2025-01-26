"use client";

import useWorshipDetail from "@/app/apis/useWorshipDetail";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingSpinner from "../common/LoadingSpinner";
import { sermonCategory } from "@/app/apis/useSermonData";
import { useState } from "react";

export default function WorshipDetail({ id }: { id: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data, isLoading } = useWorshipDetail(id);

  const getCategory = () => {
    return (searchParams.get("category") ||
      "sundaySermon") as keyof typeof sermonCategory;
  };

  const selectedCategories = {
    sundaySermon: "주일 예배",
    sundayWorshipSermon: "주일 찬양 예배",
    sundayEventSermon: "특별 예배",
  };

  const getYoutubeUrlId = (url: string) => {
    const videoId = url.split("live/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const [currentCategory, setCurrentCategory] = useState(getCategory);

  if (isLoading)
    return (
      <div className="min-h-lvh mt-[100px] text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
  if (!data) return <div>데이터를 찾을 수 없어요!</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-screen-lg">
      <div>
        <h2 className="text-2xl font-bold text-[#578fcc]">
          {selectedCategories[currentCategory]}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-8 mt-[43px]">
        <div className="flex flex-col w-full lg:w-2/3">
          <div className="flex flex-row lg:flex-col justify-between border-t border-[#D9D9D9] py-5">
            <h3 className="text-lg ss:text-2xl text-[#202020] min-w-0 truncate">
              {data.title}
            </h3>
            <span className="text-[#ABABAB] text-sm ss:text-lg block ss:hidden min-w-0 truncate">
              {data.date}
            </span>
          </div>
          <div className="border-t border-[#D9D9D9] pt-[31px] min-h-[200px]">
            <p className="text-sm ss:text-lg text-[#202020] break-words w-full lg:w-1/2">
              {data.verse}
            </p>
            <div className="mt-[20px]">
              <iframe
                width="100%"
                src={getYoutubeUrlId(data.url)}
                title="worship-sermon"
                allow="autoplay;"
                allowFullScreen
                className="rounded-[10px] block lg:hidden mt-[20px] aspect-video"
              />
            </div>
          </div>
          <div className="border-solid border-[#D9D9D9] border-y py-5">
            <span className="text-[#ABABAB] text-lg hidden ss:block">
              {data.date}
            </span>
          </div>
        </div>

        <div className="hidden lg:block w-full lg:w-1/2 mt-6 lg:mt-0">
          <iframe
            width="100%"
            height="100%"
            src={getYoutubeUrlId(data.url)}
            title="worship-sermon"
            allow="autoplay;"
            allowFullScreen
            className="rounded-[10px]"
          />
        </div>
      </div>

      <div className="flex justify-end mt-[50px]">
        <button
          className="bg-[#578FCC] text-white font-bold rounded-[22px] text-[12px] ss:text-lg w-[80px] h-[40px] ss:w-[151px] ss:h-[44px]"
          onClick={() => router.back()}
        >
          목록으로
        </button>
      </div>
    </div>
  );
}
