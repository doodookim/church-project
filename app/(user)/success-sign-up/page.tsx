import SuccessSignUp from "@/app/module/components/user/success-sign-up/success-sign-up";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "회원가입 완료 | 생명의 빛 교회",
  description: "회원가입 완료 입니다.",
};

export default function SuccessSignUpPage() {
  return <SuccessSignUp />;
}
