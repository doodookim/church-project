import { Metadata } from "next";

export const metadata: Metadata = {
  title: "선교갤러리 상세 | 생명의 빛 교회",
  description: "선교갤러리 상세 페이지 입니다.",
};

export default function MissionGalleryDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return <div>선교갤러리 상세 {id}</div>;
}
