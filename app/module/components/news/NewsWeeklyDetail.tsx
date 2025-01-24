"use client";
import useFetchNewsWeeklyDetail from "@/app/apis/useNewsWeeklyDetail";
import Image from "next/image";
import { useParams } from "next/navigation";
import LoadingSpinner from "@/app/module/components/common/LoadingSpinner";

export default function NewsWeeklyDetail({ id }: { id: string }) {
  const params = useParams();
  console.log(id, "<----------");
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
          <h1 className="text-lg text-[#202020] font-medium">{data.title}12</h1>
          {/* 12 임시로적어둠둠 */}
          <p className="text-[#ABABAB] text-lg">{data.date}2020-20-20</p>
          {/* 2020-20-20 임시로적어둠둠 */}
        </div>
      </div>

      <div className="mt-[30px]">
        {!data.weekly_img_set && (
          <div className="w-full h-[345px] bg-[#EBEBEB]">이미지가 없습니다</div>
        )}
        {data?.weekly_img_set?.map((img) => (
          <div key={img.id} className="relative">
            <Image
              src={img.image_files}
              alt="최신 뉴스이미지"
              fill={true}
              className=" priority object-cover rounded-[10px]"
            />
          </div>
        ))}
      </div>
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
