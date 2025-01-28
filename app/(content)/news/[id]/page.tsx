import NewsDetail from "@/app/module/components/news/NewsDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "교회 소식 상세 | 생명의 빛 교회",
  description: "교회 소식 상세 페이지 입니다.",
};

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <NewsDetail id={id} />
    </div>
  );
}
