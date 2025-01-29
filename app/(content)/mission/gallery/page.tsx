import { Metadata } from "next";
import ChurchMissionGallery from "@/app/module/components/mission-gallery/ChurchMissionGallery";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "선교 갤러리 | 생명의 빛 교회",
  description: "선교 갤러리 페이지 입니다.",
};

export default function MissionGalleryPage() {
  return (
    <Suspense>
      <ChurchMissionGallery />
    </Suspense>
  );
}
