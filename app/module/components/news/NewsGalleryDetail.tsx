"use client";

import useFetchGalleryDetail from "@/app/apis/useGalleryDetail";
import Image from "next/image";

export default function NewsGalleryDetail({ id }: { id: string }) {
  const { data, isLoading } = useFetchGalleryDetail(id);

  if (isLoading) return <div>로딩 중입니다!</div>;
  if (!data) return <div>데이터를 찾을 수 없어요!</div>;

  // 썸네일과 일반 이미지를 하나의 배열로 병합(grid)
  const combinedImages = [
    ...(data.gallery_thumb_img ? [data.gallery_thumb_img] : []),
    ...data.gallery_img_set,
  ];

  return (
    <div>
      <div className="flex items-center justify-between border-[#D9D9D9] border-solid border-y py-[18px]">
        <h1 className="text-xl font-bold text-[#202020]">{data.title}</h1>
        <p className="text-[#ABABAB]">{data.date}</p>
      </div>
      <p>{data.content}</p>

      {/* 이미지 섹션 (썸네일 포함) */}
      {combinedImages.length > 0 && (
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 mt-[30px]">
          {combinedImages.map((img) => (
            <div key={img.id} className="relative  h-[206px]">
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
      {data.gallery_video_set.length > 0 && (
        <div className="space-y-4">
          {data.gallery_video_set.map((video) => (
            <video key={video.id} controls className="w-full rounded-lg">
              <source src={video.video_files} type="video/mp4" />
              지원하지 않는 브라우저입니다. 비디오를 보려면 최신 브라우저로
              업데이트하세요.
            </video>
          ))}
        </div>
      )}
      <div className="flex justify-end">
        <button
          className="justify-end mt-10  bg-[#578FCC] text-white font-bold rounded-[22px] text-lg w-[151px] h-[44px]"
          onClick={() => window.history.back()}
        >
          목록으로
        </button>
      </div>
    </div>
  );
}
