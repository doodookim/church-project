import SignIn from "@/app/module/components/user/sgin-in/sign-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인 | 생명의 빛 교회",
  description: "로그인 페이지 입니다.",
};

export default function SignInPage() {
  return <SignIn />;
}
