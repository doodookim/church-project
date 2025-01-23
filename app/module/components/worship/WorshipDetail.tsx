"use client";

import useWorshipDetail from "@/app/apis/useWorshipDetail";
import { useParams, useSearchParams } from "next/navigation";
import LoadingSpinner from "../common/LoadingSpinner";
import { sermonCategory } from "@/app/apis/useSermonData";
import { useState } from "react";

export default function WorshipDetail({ id }: { id: string }) {
  const params = useParams();
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
    <div>
      <div>
        <h2 className="text-2xl font-bold text-[#578fcc]">
          {selectedCategories[currentCategory]}
        </h2>
      </div>

      <div className="flex justify-between gap-4 mt-[43px]">
        <div className="flex flex-col">
          <div className="border-t border-[#D9D9D9] py-5">
            <h3 className="text-xl  text-[#202020]">{data.title}</h3>
          </div>
          <div className="border-t border-[#D9D9D9] pt-[31px]">
            <p className="text-[#202020] break-words h-[198px] overflow-y-auto w-[401px]">
              {data.verse}
            </p>
          </div>
          <div className="border-solid border-[#D9D9D9] border-y py-5">
            <span className="text-[#ABABAB] text-lg ">{data.date}</span>
          </div>
        </div>
        <div className="w-full">
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
      <div className="flex justify-end mt-10">
        <button
          className="w-[151px] h-[44px] bg-[#578FCC] text-white rounded-[22px]"
          onClick={() => window.history.back()}
        >
          목록으로
        </button>
      </div>
    </div>
  );
}
