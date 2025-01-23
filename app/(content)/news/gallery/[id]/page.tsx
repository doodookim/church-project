import NewsGalleryDetail from "@/app/module/components/news/NewsGalleryDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "생명의 빛 갤러리 상세 | 생명의 빛 교회",
  description: "생명의 빛 갤러리 상세 페이지 입니다.",
};

export default function GalleryDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return (
    <div>
      <NewsGalleryDetail id={id} />
    </div>
  );
}
