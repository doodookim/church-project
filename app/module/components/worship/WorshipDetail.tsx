"use client";

import useWorshipDetail from "@/app/apis/useWorshipDetail";
import { useParams, useSearchParams } from "next/navigation";
import LoadingSpinner from "../common/LoadingSpinner";
import { sermonCategory } from "@/app/apis/useSermonData";
import { useState } from "react";

export default function WorshipDetail() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = Number(params.id);
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
    <div className="flex flex-col px-6 py-8">
      <div>
        <h2 className="text-2xl font-bold text-[#578fcc]">
          {selectedCategories[currentCategory]}
        </h2>
      </div>

      <div className="flex justify-between gap-8 mt-8">
        <div className="flex-1 flex flex-col h-[315px]">
          <div className="border-t border-[#D9D9D9] pt-6">
            <h3 className="text-xl font-medium text-[#202020]">{data.title}</h3>
          </div>
          <div className="border-t border-[#D9D9D9] mt-6 pt-6 flex-1">
            <p className="text-[#202020] break-words">{data.verse}</p>
          </div>
          <div className="border-t border-[#D9D9D9] mt-6 pt-6">
            <span className="text-[#ABABAB]">{data.date}</span>
          </div>
          <div className="border-t border-[#D9D9D9] mt-6"></div>
        </div>
        <div className="flex-1">
          <iframe
            width="100%"
            height="315"
            src={getYoutubeUrlId(data.url)}
            title="worship-sermon"
            allow="autoplay;"
            allowFullScreen
            className="rounded-[10px]"
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          className="px-6 py-3 bg-[#578FCC] text-white rounded-[22px] hover:bg-[#4A7AB0] transition-colors"
          onClick={() => window.history.back()}
        >
          목록으로
        </button>
      </div>
    </div>
  );
}
