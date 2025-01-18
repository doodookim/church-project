import NextGeneration from "@/app/module/components/notice/next-generation/NextGeneration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "다음 세대 | 생명의 빛 교회",
  description: "다음 세대 페이지 입니다.",
};

export default function NextGenerationPage() {
  return (
    <div>
      <div>다음세대</div>
      <NextGeneration />
    </div>
  );
}
