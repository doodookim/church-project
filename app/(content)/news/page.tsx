import NewsPagination from "@/app/module/components/news/NewsPagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "교회 소식 | 생명의 빛 교회",
  description: "교회 소식 페이지 입니다.",
};

export default function NewsPage() {
  return (
    <div>
      <NewsPagination />
    </div>
  );
}
