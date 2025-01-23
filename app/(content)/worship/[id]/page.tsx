import WorshipDetail from "@/app/module/components/worship/WorshipDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "예배 및 집회 상세 | 생명의 빛 교회",
  description: "예배 및 집회 상세 페이지 입니다.",
};

export default function WorshipDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return (
    <div>
      {/* <div>예배 및 집회 상세 {id}</div> */}
      <WorshipDetail id={id} />
    </div>
  );
}
