"use client";

import useFetchNewsDetail from "@/app/apis/useNewsDetail";
import Image from "next/image";
import { useParams } from "next/navigation";
import LoadingSpinner from "../common/LoadingSpinner";

export default function NewsDetail() {
  const params = useParams();
  const id = Number(params.id);
  const { data, isLoading } = useFetchNewsDetail(id);
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
  if (!data) return <div>데이터를 찾을 수 없어요!</div>;
  return (
    <div>
      <div className="border-t-2 border-[#D9D9D9] border-solid">
        <h1 className="text-xl font-bold py-5">{data.title}</h1>
      </div>

      <p className="text-[#ABABAB] text-lg border-y-2 border-[#D9D9D9] border-solid py-[21px]">
        {data.date}
      </p>
      <div className="mt-[31px]">{data.content}</div>
      <div>
        {data.file_set.map((file) => (
          <div key={file.id} className="relative w-[300px] h-[300px]">
            <Image
              src={file.file}
              alt="뉴스파일"
              layout="fill"
              className="priority object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div>
        {data.church_news_img_set.map((img) => (
          <div key={img.id} className="relative w-[300px] h-[300px] ">
            <Image
              src={img.image_files}
              alt="뉴스이미지"
              layout="fill"
              className="object-cover rounded-lg "
            />
          </div>
        ))}
      </div>

      {/* 목록으로 */}
      <div className="flex justify-end mt-10 text-lg text-white">
        <button
          className="bg-[#578FCC] rounded-[22px] w-[151px] h-11"
          onClick={() => window.history.back()}
        >
          목록으로
        </button>
      </div>
    </div>
  );
}
