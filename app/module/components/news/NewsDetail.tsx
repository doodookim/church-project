"use client";

import useFetchNewsDetail from "@/app/apis/useNewsDetail";
import Image from "next/image";
import LoadingSpinner from "../common/LoadingSpinner";
import { useRouter } from "next/navigation";

export default function NewsDetail({ id }: { id: string }) {
  const router = useRouter();
  const { data, isLoading } = useFetchNewsDetail(id);

  if (isLoading) {
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
  }

  if (!data) {
    return <div>데이터를 찾을 수 없어요!</div>;
  }

  return (
    <div>
      <div className="border-t-2 border-[#D9D9D9] border-solid">
        <h1 className="text-lg ss:text-xl font-bold py-5 min-w-0 truncate">
          {data.title}
        </h1>
      </div>

      <p className="text-sm ss:text-lg text-[#ABABAB] border-y-2 border-[#D9D9D9] border-solid py-[21px] min-w-0 truncate">
        {data.date}
      </p>
      <div className="mt-[31px] text-sm ss:text-base min-h-[100px] w-full break-words">
        {data.content}
      </div>

      <div className="flex flex-col gap-4">
        {data?.church_news_img_set?.map((img) => (
          <div key={img.id} className="relative w-full mb-4 aspect-square">
            <Image
              src={img.image_files}
              alt="뉴스이미지"
              layout="fill"
              className="object-cover rounded-[10px] w-full"
            />
          </div>
        ))}
      </div>
      <div className="mb-4 gap-2">
        {data?.file_set?.map((file) => (
          <a
            key={file.id}
            href={file.file}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[#578FCC] font-bold break-all"
          >
            {file.file ? file.file : ""}
          </a>
        ))}
      </div>
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
