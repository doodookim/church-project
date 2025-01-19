import MainCarousel from "./module/components/main/MainCarousel";
import MainNewsList from "./module/components/main/MainNewsList";
import MainRecentWorship from "./module/components/main/MainRecentWorship";
import MainSermonTime from "./module/components/main/MainSermonTime";
import MainWeekly from "./module/components/main/MainWeekly";

export default function Home() {
  return (
    <div>
      <div>
        <MainCarousel />
      </div>
      <div className="flex gap-6 px-6 mb-20 mt-12">
        <div className="w-1/3 bg-white rounded-lg shadow-sm min-h-[500px] p-6">
          <MainNewsList />
        </div>
        <div className="w-1/3 bg-white rounded-lg shadow-sm min-h-[500px] p-6">
          <MainWeekly />
        </div>
        <div className="w-1/3 flex flex-col gap-8">
          <div className="aspect-[16/9] w-full bg-white rounded-lg shadow-sm p-4">
            <MainRecentWorship />
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-sm p-4">
            <MainSermonTime />
          </div>
        </div>
      </div>
    </div>
  );
}
