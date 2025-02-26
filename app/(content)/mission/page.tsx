import { Metadata } from "next";
import ChurchMissionField from "@/app/module/components/mission-field/ChurchMissionField"

export const metadata: Metadata = {
  title: "선교지 안내 | 생명의 빛 교회",
  description: "선교지 안내 페이지 입니다.",
};

export default function MissionPage() {
  return (
  <div>
    <ChurchMissionField/>
  </div>
  );
}
