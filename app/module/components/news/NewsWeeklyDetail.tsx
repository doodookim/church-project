"use client";
import useFetchNewsWeeklyDetail from "@/app/apis/useNewsWeeklyDetail";
import Image from "next/image";
import { useParams } from "next/navigation";
import LoadingSpinner from "@/app/module/components/common/LoadingSpinner";

export default function NewsWeeklyDetail() {
  const params = useParams();
  const id = Number(params.id);
  console.log(id, "<----------");
  const { data, isLoading } = useFetchNewsWeeklyDetail(id);
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
  if (!data) return <div>데이터를 찾을 수 없어요!</div>;
  console.log(data);
  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="text-gray-600">{data.date}</p>
        </div>
      </div>
      <div>
        {data?.weekly_img_set.map((img) => (
          <div
            key={img.id}
            className="flex flext-col relative w-full h-[300px]"
          >
            <Image
              src={img.image_files}
              alt="최신 뉴스이미지"
              fill={true}
              className=" priority object-cover rounded-lg"
            />
          </div>
        ))}
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
