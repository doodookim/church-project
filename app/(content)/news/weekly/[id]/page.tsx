import NewsWeeklyDetail from "@/app/module/components/news/NewsWeeklyDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "주보 상세 | 생명의 빛 교회",
  description: "주보 상세 페이지 입니다.",
};

export default function NewsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>
      <div>주보 상세 {id}</div>
      <NewsWeeklyDetail />
    </div>
  );
}
