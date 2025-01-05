import NewsGalleryPagination from "@/app/module/components/news/NewsGalleryPagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "생명의 빛 갤러리 | 생명의 빛 교회",
  description: "생명의 빛 갤러리 페이지 입니다.",
};

export default function GalleryPage() {
  return (
    <div>
      <div>생명의 빛 갤러리</div>
      <NewsGalleryPagination />
    </div>
  );
}
