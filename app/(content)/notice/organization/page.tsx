
import { Metadata } from "next";
import ChurchNotice from "@/app/module/components/notice/ChurchNotice";
import ChurchOrganization from "@/app/module/components/organization/ChurchOrganization"


export const metadata: Metadata = {
  title: "교회 조직 | 생명의 빛 교회",
  description: "교회 조직 페이지 입니다.",
};

export default function OrganizationPage() {
  return(<div>
  <div>교회 조직</div>
  <ChurchOrganization/>
  </div>
  );
}
