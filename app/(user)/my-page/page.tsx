import MyPage from "@/app/module/components/user/my-page/my-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "마이 페이지 | 생명의 빛 교회",
  description: "마이 페이지 입니다.",
};

export default async function MyPagePage() {
  return <MyPage />;
}
