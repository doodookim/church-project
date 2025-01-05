"use client";

import { useState } from "react";
import BoxLayout from "../box-layout";
import UserButton from "../button";
import Input from "../input";
import ConfirmModal from "./confirm-modal";

export default function FindPassword() {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <BoxLayout
        width={650}
        classNamePlus="pt-[60px] pb-[72px] px-[83px] flex flex-col justify-center items-center"
      >
        <form action="" className="w-full flex justify-between items-center">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="이메일 입력"
            classNamePlus="w-[calc(100%-167px)]"
          />
          <UserButton>이메일 인증</UserButton>
        </form>
        <form action="" className="w-full flex justify-between items-center">
          <Input
            type="text"
            name="authentication"
            id="authentication"
            placeholder="이메일 입력"
            classNamePlus="w-[calc(100%-167px)]"
          />
          <UserButton>확인</UserButton>
        </form>
      </BoxLayout>
      {isModal && <ConfirmModal />}
    </>
  );
}
