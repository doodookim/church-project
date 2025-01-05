import { Metadata } from "next";
import ChurchFacility from "@/app/module/components/facility/ChurchFacility"

export const metadata: Metadata = {
  title: "시설 안내 | 생명의 빛 교회",
  description: "시설 안내 페이지 입니다.",
};

export default function FacilityPage() {
  return (<div>
    <ChurchFacility/>
  </div>);
}
