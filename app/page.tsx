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

        <div className="flex flex-wrap xl:flex-nowrap gap-[30px] sm:gap-2 lg:gap-4 xl:gap-6 px-6 mb-[84px] mt-[70px]">
          {/* 교회소식 */}
          <div className="w-full md:w-1/2 xl:w-1/3 flex-1 rounded-lg min-h-[400px] xl:h-[500px] flex justify-center">
            <MainNewsList />
          </div>

          {/* 교회주보 */}
          <div className="w-full md:w-1/2 xl:w-1/3 flex-1 rounded-lg min-h-[400px] xl:h-[500px] flex justify-center">
            <MainWeekly />
          </div>

          {/* 최근주일예배, 예배시간 */}
          <div className="w-full xl:w-1/3 flex flex-col gap-[60px]">
            <div className="flex-1 rounded-[15px] min-h-[200px] xl:h-[300px]">
              <MainRecentWorship />
            </div>
            <div className="flex-1 rounded-[15px] min-h-[200px] xl:h-[300px]">
              <MainSermonTime />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
