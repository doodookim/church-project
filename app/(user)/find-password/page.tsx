import FindPassword from "@/app/module/components/user/find-password/find-password";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "비밀번호 찾기 | 생명의 빛 교회",
  description: "비밀번호 찾기 페이지 입니다.",
};

export default function FindPasswordPage() {
  return <FindPassword />;
}
