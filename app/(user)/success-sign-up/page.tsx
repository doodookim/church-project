import BoxLayout from "@/app/module/components/user/box-layout";
import UserButton from "@/app/module/components/user/button";
import TitleLayout from "@/app/module/components/user/title-layout";
import { Metadata } from "next";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "회원가입 완료 | 생명의 빛 교회",
  description: "회원가입 완료 입니다.",
};

export default function SuccessSignUpPage() {
  const handleClick = () => {
    signOut();
  };
  return (
    <BoxLayout width={650}>
      <div className="mt-[108px] mb-[113px] flex flex-col justify-center items-center gap-[40px]">
        <TitleLayout
          title="회원가입이 완료되었습니다. "
          classNamePlus="flex justify-center"
        />
        <div className="flex gap-[18px]">
          <UserButton>
            <Link
              href={"/"}
              className="flex justify-center items-center w-full h-full"
            >
              메인으로
            </Link>
          </UserButton>
          <UserButton onClick={handleClick}>로그아웃</UserButton>
        </div>
      </div>
    </BoxLayout>
  );
}
