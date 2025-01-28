"use client";

import useModalStore from "@/app/module/store/useModalStore";
import { signOut } from "next-auth/react";
import React from "react";
import TitleLayout from "../title-layout";
import BoxLayout from "../box-layout";
import UserButton from "../button";
import Link from "next/link";

export default function SuccessSignUp() {
  const { showModal } = useModalStore();

  const handleClick = () => {
    showModal({
      title: "정말로 로그아웃을 하시겠습니까?",
      type: "confirm",
      onClickFunction: signOut,
    });
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
