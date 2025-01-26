import dynamic from "next/dynamic";
import useMainData from "./apis/useMainData";

const MainCarousel = dynamic(
  () => import("./module/components/main/MainCarousel")
);
const MainNewsList = dynamic(
  () => import("./module/components/main/MainNewsList")
);
const MainWeekly = dynamic(() => import("./module/components/main/MainWeekly"));
const MainRecentWorship = dynamic(
  () => import("./module/components/main/MainRecentWorship")
);
const MainSermonTime = dynamic(
  () => import("./module/components/main/MainSermonTime")
);
export const dynamics = "force-dynamic";

export default async function Home() {
  const { carousel, news, weekly, recentWorship } = await useMainData();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        {/* 메인 캐러셀 */}
        <div className="w-full">
          <MainCarousel carousel={carousel} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] ss:gap-4 pt-[100px] pb-[84px] px-[20px] ss:px-0 max-w-[1024px] mx-auto">
          {/* 교회소식 */}
          <div className="w-full">
            <MainNewsList news={news} />
          </div>

          {/* 교회주보 */}
          <div className="w-full">
            <MainWeekly weekly={weekly} />
          </div>

          {/* 최근주일예배, 예배시간 */}
          <div className="w-full flex flex-col gap-4 md:justify-normal md:col-span-2 lg:col-auto justify-end">
            <div className="lg:mb-[35px]"></div>
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-[3/1]">
                <MainRecentWorship recentWorship={recentWorship} />
              </div>
              <div className="w-full aspect-[3/1]">
                <MainSermonTime />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
