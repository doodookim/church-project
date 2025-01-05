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
  console.log(data);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{data.title}</h1>
        </div>
      </div>
      <p className="text-gray-600">{data.date}</p>
      <div>{data.content}</div>
      <div>
        {data.gallery_img_set.map((gallerydetail) => (
          <div key={gallerydetail.id} className="relative w-full h-[300px] ">
            <Image
              src={gallerydetail.image_files}
              alt="갤러리 소식 디테일"
              layout="fill"
              className="priority object-cover rounded-lg p-[20px]"
            />
          </div>
        ))}
      </div>
      <div>
        {data.gallery_video_set.length > 0 && (
          <div className="mb-4">
            {data.gallery_video_set.map((video) => (
              <video key={video.id} controls className="w-full rounded-lg">
                <source src={video.video_files} type="vide/mp4" />
                해당 영상 실행을 지원하지 않는 브라우저입니다.
              </video>
            ))}
          </div>
        )}
      </div>
      <button
        className="w-[100px] h-[100px] bg-sky-600"
        onClick={() => window.history.back()}
      >
        목록
      </button>
    </div>
  );
}
