import React, { Dispatch, SetStateAction } from "react";
import BoxLayout from "../box-layout";
import TitleLayout from "../title-layout";
import UserButton from "../button";
import Link from "next/link";

export default function ConfirmModal() {
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh]">
      <div className="fixed top-0 left-0 w-full h-[100vh] bg-black/50 cursor-pointer" />
      <BoxLayout
        width={650}
        classNamePlus="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div className="mt-[108px] mb-[113px] flex flex-col justify-center items-center gap-[40px]">
          <TitleLayout
            title="비밀번호가 변경되었습니다."
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
            <UserButton>
              <Link
                href={"/sign-in"}
                className="flex justify-center items-center w-full h-full"
              >
                로그인
              </Link>
            </UserButton>
          </div>
        </div>
      </BoxLayout>
    </div>
  );
}
