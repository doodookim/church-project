"use client";

import useFetchNewsDetail from "@/app/apis/useNewsDetail";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function NewsDetail() {
  const params = useParams();
  const id = Number(params.id);
  const { data, isLoading } = useFetchNewsDetail(id);
  console.log(data);
  if (isLoading) return <div>로딩 중입니다!</div>;
  if (!data) return <div>데이터를 찾을 수 없어요!</div>;
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          {/* {data.notification && (
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              공지
            </span>
          )} */}
        </div>
      </div>
      <p className="text-gray-600">{data.date}</p>
      <div>{data.content}</div>
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
          <div key={img.id} className="relative w-[300px] h-[300px]">
            <Image
              src={img.image_files}
              alt="뉴스이미지"
              layout="fill"
              className="object-cover rounded-lg "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
{
  /* {data.file_set.map((file) => (
          <div key={file.id} className="relative aspect-video">
            <Image
              src={file.file}
              alt="첨부 이미지"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))} */
}
