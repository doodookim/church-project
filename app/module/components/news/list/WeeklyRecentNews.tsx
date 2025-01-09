import { INewsImg } from "@/utils/types/newsData";
import Image from "next/image";
import Link from "next/link";

interface INewsWeeklyRecentProps {
  data: INewsImg[] | undefined;
  isLoading: boolean;
}

export default function WeeklyRecentNews({
  data,
  isLoading,
}: INewsWeeklyRecentProps) {
  if (!data) return <div>데이터가 없습니다</div>;
  if (isLoading) return <div>로딩 중입니다</div>;
  return (
    <div className="flex flex-col cursor-pointer mt-[40px] gap-[16px]">
      {data?.map((recent) => (
        <div key={recent.id} className="relative">
          <Link href={`/news/weekly/${recent.id}`}>
            <Image
              src={recent.image_files}
              alt={`최신뉴스파일 ${recent.id + 1}`}
              className="object-cover rounded-lg"
              width={200}
              height={200}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
