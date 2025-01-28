"use client";
import useFetchNewsWeeklyDetail from "@/app/apis/useNewsWeeklyDetail";
import Image from "next/image";
import LoadingSpinner from "@/app/module/components/common/LoadingSpinner";
import { useRouter } from "next/navigation";

export default function NewsWeeklyDetail({ id }: { id: string }) {
  const router = useRouter();
  const { data, isLoading } = useFetchNewsWeeklyDetail(id);
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
  if (!data) return <div>데이터를 찾을 수 없어요!</div>;

  return (
    <div>
      <div className="py-5 border-b border-solid border-[#D9D9D9]">
        <div className="flex justify-between items-center">
          <h1 className="text-sm ss:text-lg text-[#202020] font-medium">
            {data.title}
          </h1>
          <p className="text-[#ABABAB] text-sm ss:text-lg">{data.date}</p>
        </div>
      </div>

      <div className="mt-[30px] w-full flex flex-col justify-center items-center">
        {!data.weekly_img_set && (
          <div className="w-full h-[345px] flex bg-[#EBEBEB] rounded-[22px] items-center justify-center">
            이미지가 없습니다
          </div>
        )}
        {data?.weekly_img_set?.map((img) => (
          <div
            key={img.id}
            className="relative w-full flex justify-center items-center mb-4 aspect-[4/3] mt-[30px] ss:mt-[60px]"
          >
            <Image
              src={img.image_files}
              alt="최신 뉴스이미지"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover rounded-[10px]"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-[50px] text-lg text-white">
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
