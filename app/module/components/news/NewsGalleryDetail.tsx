"use client";

import useFetchGalleryDetail from "@/app/apis/useGalleryDetail";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../common/LoadingSpinner";

export default function NewsGalleryDetail({ id }: { id: string }) {
  const router = useRouter();
  const { data, isLoading } = useFetchGalleryDetail(id);

  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
  if (!data) return <div>데이터를 찾을 수 없어요!</div>;

  // 썸네일과 일반 이미지를 하나의 배열로 병합(grid)
  const combinedImages = [
    ...(data.gallery_thumb_img ? [data.gallery_thumb_img] : []),
    ...data.gallery_img_set,
  ];

  return (
    <div>
      <div className="flex items-center justify-between border-[#D9D9D9] border-solid border-y py-[18px]">
        <h1 className="text-xl font-bold text-[#202020] min-w-0 truncate">
          {data.title}
        </h1>
        <p className="text-[#ABABAB] min-w-0 truncate">{data.date}</p>
      </div>
      <p>{data.content}</p>

      {/* 이미지 섹션 (썸네일 포함) */}
      {combinedImages.length > 0 && (
        <div className="flex flex-col mt-[30px] ss:mt-[60px] gap-[30px]">
          {combinedImages.map((img) => (
            <div key={img.id} className="relative w-full mb-4 aspect-square">
              <Image
                src={img.image_files}
                alt={`갤러리 이미지 ${img.id}`}
                layout="fill"
                className="object-cover rounded-[10px] w-full"
              />
            </div>
          ))}
        </div>
      )}

      {/* 비디오 섹션 */}
      {data.gallery_video_set.length > 0 && (
        <div className="space-y-4 mt-[30px]">
          {data.gallery_video_set.map((video) => (
            <video key={video.id} controls className="w-full rounded-[10px]">
              <source src={video.video_files} type="video/mp4" />
              지원하지 않는 브라우저입니다. 비디오를 보려면 최신 브라우저로
              업데이트하세요.
            </video>
          ))}
        </div>
      )}
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
