"use client";

import useFetchGalleryDetail from "@/app/apis/useGalleryDetail";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function NewsGalleryDetail() {
  const params = useParams();
  const id = Number(params.id);
  const { data, isLoading } = useFetchGalleryDetail(id);

  if (isLoading) return <div>로딩 중입니다!</div>;
  if (!data) return <div>데이터를 찾을 수 없어요!</div>;

  // 썸네일과 일반 이미지를 하나의 배열로 병합(grid)
  const combinedImages = [
    ...(data.gallery_thumb_img ? [data.gallery_thumb_img] : []),
    ...data.gallery_img_set,
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-600 mb-8">{data.date}</p>
      <p className="mb-8">{data.content}</p>

      {/* 이미지 섹션 (썸네일 포함) */}
      {combinedImages.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {combinedImages.map((img) => (
            <div key={img.id} className="relative w-full h-64">
              <Image
                src={img.image_files}
                alt={`갤러리 이미지 ${img.id}`}
                layout="fill"
                className="object-cover rounded-lg"
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
          className="justify-end mt-8 px-6 py-3 bg-sky-600 text-white font-bold rounded-[22px]"
          onClick={() => window.history.back()}
        >
          목록
        </button>
      </div>
    </div>
  );
}
