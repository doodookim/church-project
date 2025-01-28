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
      <div className="pt-[108px] pb-[113px] flex flex-col justify-center items-center gap-[40px]">
        <TitleLayout
          title="회원가입이 완료되었습니다. "
          classNamePlus="flex justify-center text-sm ss:text-base"
        />
        <div className="flex gap-[9px] ss:gap-[18px]">
          <UserButton className="text-sm ss:text-base w-[120px] h-[38px] ss:w-[150px] ss:h-[42px] rounded-full transition-all duration-300 flex justify-center items-center">
            <Link
              href={"/"}
              className="flex justify-center items-center w-full h-full"
            >
              메인으로
            </Link>
          </UserButton>
          <UserButton
            onClick={handleClick}
            className="text-sm ss:text-base w-[120px] h-[38px] ss:w-[150px] ss:h-[42px] rounded-full transition-all duration-300 flex justify-center items-center"
          >
            로그아웃
          </UserButton>
        </div>
      </div>
    </BoxLayout>
  );
}
