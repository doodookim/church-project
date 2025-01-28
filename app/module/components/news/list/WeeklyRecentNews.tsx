import { INewsImg } from "@/utils/types/newsData";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "@/app/module/components/common/LoadingSpinner";

interface INewsWeeklyRecentProps {
  data: INewsImg[] | undefined;
  isLoading: boolean;
}

export default function WeeklyRecentNews({
  data,
  isLoading,
}: INewsWeeklyRecentProps) {
  if (!data) return <div>데이터가 없습니다</div>;
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );
  return (
    <div>
      <div className="max-w-full ss:max-w-[234px] w-full flex flex-col gap-4">
        {data?.map((recent) => (
          <div key={recent.id} className="relative">
            <Link href={`/news/weekly/${recent.id}`}>
              <Image
                src={recent.image_files}
                alt={`최신뉴스파일 ${recent.id + 1}`}
                width={234}
                height={234}
                priority
                className="object-cover rounded-lg w-full"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
