import MainCarousel from "./module/components/main/MainCarousel";
import MainNewsList from "./module/components/main/MainNewsList";
import MainRecentWorship from "./module/components/main/MainRecentWorship";
import MainSermonTime from "./module/components/main/MainSermonTime";
import MainWeekly from "./module/components/main/MainWeekly";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        {/* 메인 캐러셀 */}
        <div className="w-full">
          <MainCarousel />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-[100px] pb-[84px] max-w-[1024px] mx-auto">
          {/* 교회소식 */}
          <div className="w-full">
            <MainNewsList />
          </div>

          {/* 교회주보 */}
          <div className="w-full">
            <MainWeekly />
          </div>

          {/* 최근주일예배, 예배시간 */}
          <div className="w-full flex flex-col gap-4 md:justify-normal md:col-span-2 lg:col-auto justify-end">
            <div className="lg:mb-[35px]"></div>
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-[3/1]">
                <MainRecentWorship />
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
