import ChurchNotice from "@/app/module/components/notice/ChurchNotice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "교회 안내 | 생명의 빛 교회",
  description: "교회 안내 페이지 입니다.",
};

export default function NoticePage() {
  return(<div>
  <div>교회 안내</div>
  <ChurchNotice/>
  </div>);
}
