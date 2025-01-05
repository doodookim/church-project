import useFetchNewsWeeklyRecent from "@/app/apis/useNewsWeeklyRecent";
import { INewsImg } from "@/utils/types/newsData";
import Image from "next/image";

export default function WeeklyRecentNews() {
  const { data, isLoading } = useFetchNewsWeeklyRecent();

  return (
    <div className="flex flex-col cursor-pointer mt-[40px] gap-[16px]">
      {data?.map((recent) => (
        <div key={recent.id} className="relative">
          {Array.isArray(recent.image_files) ? (
            // image_files가 배열인 경우
            recent.image_files.map((image, index) => (
              <div key={index} className="relative w-[200px] h-[200px]">
                <Image
                  src={image}
                  alt={`최신뉴스파일 ${index + 1}`}
                  className="object-cover rounded-lg"
                  width={200}
                  height={200}
                />
              </div>
            ))
          ) : (
            // image_files가 단일 문자열인 경우
            <div className="relative w-[200px] h-[200px]">
              <Image
                src={recent.image_files}
                alt="최신뉴스파일"
                className="object-cover rounded-lg"
                width={200}
                height={200}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
