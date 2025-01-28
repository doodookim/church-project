import NewsWeeklyDetail from "@/app/module/components/news/NewsWeeklyDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "주보 상세 | 생명의 빛 교회",
  description: "주보 상세 페이지 입니다.",
};

export default async function NewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <div className="py-5 border-y border-solid border-[#D9D9D9] text-sm ss:text-lg text-[#202020]">
        {id}
      </div>
      <NewsWeeklyDetail id={id} />
    </div>
  );
}
