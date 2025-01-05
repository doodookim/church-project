import SignUp from "@/app/module/components/user/sign-up/sign-up";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "회원가입 | 생명의 빛 교회",
  description: "회원가입 페이지 입니다.",
};

export default function SignUpPage() {
  return <SignUp />;
}
