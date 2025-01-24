"use client";

import useFetchMissionGalleryDetail from "@/app/apis/useMissionGalleryDetailData";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import LoadingSpinner from "@/app/module/components/common/LoadingSpinner";

export default function ChurchMissionGalleryDetail({ id }: { id: string }) {
  const params = useParams();
  const { data, isLoading } = useFetchMissionGalleryDetail(id);

  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );

  if (!data) return <div>데이터를 찾을 수 없어요!</div>;
  // 썸네일과 일반 이미지를 하나의 배열로 병합(grid)
  const combinedImages = [
    ...(data.mission_gallery_thumb_img ? [data.mission_gallery_thumb_img] : []),
    ...data.mission_gallery_img_set,
  ];

  return (
    <div>
      <div className="flex justify-between border-t-2 border-b-2 border-black py-5 items-center">
        <h1 className="text-xl font-bold ">{data.title}</h1>
        <p className="text-[#ABABAB] text-lg ">{data.date}</p>
      </div>

      {/* 이미지 섹션 (썸네일 포함) */}
      {combinedImages.length > 0 && (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-[30px] gap-4">
          {combinedImages.map((img) => (
            <div key={img.id} className="relative w-full h-[206px]">
              <Image
                src={img.image_files}
                alt={`갤러리 이미지 ${img.id}`}
                layout="fill"
                className="object-cover rounded-[10px]"
              />
            </div>
          ))}
        </div>
      )}
      {/* 비디오 섹션 */}
      {data.mission_gallery_video_set.length > 0 && (
        <div className="space-y-4">
          {data.mission_gallery_video_set.map((video) => (
            <video key={video.id} controls className="w-full rounded-[10px]">
              <source src={video.video_files} type="video/mp4" />
              지원하지 않는 브라우저입니다. 비디오를 보려면 최신 브라우저로
              업데이트하세요.
            </video>
          ))}
        </div>
      )}
      {/* 목록으로 */}
      <div className="flex justify-end mt-10 text-lg text-white">
        <button className="bg-[#578FCC] rounded-[22px] w-[151px] h-11">
          목록으로
        </button>
      </div>
    </div>
  );
}
