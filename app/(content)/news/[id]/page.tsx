import { Metadata } from "next";

export const metadata: Metadata = {
  title: "교회 소식 상세 | 생명의 빛 교회",
  description: "교회 소식 상세 페이지 입니다.",
};

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div></div>;
}
