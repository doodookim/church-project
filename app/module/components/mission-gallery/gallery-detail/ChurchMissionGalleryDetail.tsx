"use client";

import useFetchMissionGalleryDetail from "@/app/apis/useMissionGalleryDetailData";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LoadingSpinner from "@/app/module/components/common/LoadingSpinner";

export default function ChurchMissionGalleryDetail({ id }: { id: string }) {
  const router = useRouter();
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
      <div className="flex justify-between border-t-2 border-b-2 border-[#D9D9D9] py-5 items-center">
        <h1 className="text-xl font-bold text-[#202020] min-w-0 truncate ">
          {data.title}
        </h1>
        <p className="text-[#ABABAB] text-lg min-w-0 truncate">{data.date}</p>
      </div>

      {/* 이미지 섹션 (썸네일 포함) */}
      {combinedImages.length > 0 && (
        <div className="flex flex-col mt-[30px] ss:mt-[60px] gap-[30px]">
          {combinedImages.map((img) => (
            <div key={img.id} className="relative w-full mb-4 aspect-[4/3]">
              <Image
                src={img.image_files}
                alt={`갤러리 이미지 ${img.id}`}
                fill
                className="object-cover rounded-[10px]"
              />
            </div>
          ))}
        </div>
      )}
      {/* 비디오 섹션 */}
      {data?.mission_gallery_video_set?.length > 0 && (
        <div className="space-y-4 mt-[30px]">
          {data?.mission_gallery_video_set?.map((video) => (
            <video key={video.id} controls className="w-full rounded-[10px]">
              <source src={video.video_files} type="video/mp4" />
              지원하지 않는 브라우저입니다. 비디오를 보려면 최신 브라우저로
              업데이트하세요.
            </video>
          ))}
        </div>
      )}
      {/* 목록으로 */}
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
