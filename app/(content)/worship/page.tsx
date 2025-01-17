import Worship from "@/app/module/components/\bworship/Worship";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "예배 및 집회 | 생명의 빛 교회",
  description: "예배 및 집회 페이지 입니다.",
};

export default async function WorshipPage() {
  return (
    <div>
      <div>예배 및 집회</div>
      <Worship />
    </div>
  );
}
