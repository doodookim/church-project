import NewsWeeklyPagination from "@/app/module/components/news/NewsWeeklyPagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "주보 | 생명의 빛 교회",
  description: "주보 페이지 입니다.",
};

export default function WeeklyPage() {
  return (
    <div>
      <div>주보</div>
      <NewsWeeklyPagination />
    </div>
  );
}
