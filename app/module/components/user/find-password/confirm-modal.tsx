import React from "react";
import TitleLayout from "../title-layout";
import UserButton from "../button";
import Link from "next/link";

export default function ConfirmModal() {
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] z-50">
      <div className="fixed top-0 left-0 w-full h-[100vh] bg-black/50 cursor-pointer" />

      <div className="px-[40px] fixed w-full max-w-[564px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="w-full bg-white rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.05)]">
          <div className="py-[80px] ss:py-[108px] flex flex-col justify-center items-center gap-[40px]">
            <TitleLayout
              title="비밀번호가 변경되었습니다."
              classNamePlus="flex justify-center text-sm ss:text-base"
            />
            <div className="flex gap-[9px] ss:gap-[18px]">
              <UserButton className="text-sm ss:text-base w-[120px] h-[38px] ss:w-[150px] ss:h-[42px] rounded-full transition-all duration-300 flex justify-center items-center">
                <Link
                  href={"/"}
                  className="flex justify-center items-center w-full h-full text-sm ss:text-base"
                >
                  메인으로
                </Link>
              </UserButton>
              <UserButton className="text-sm ss:text-base w-[120px] h-[38px] ss:w-[150px] ss:h-[42px] rounded-full transition-all duration-300 flex justify-center items-center">
                <Link
                  href={"/sign-in"}
                  className="flex justify-center items-center w-full h-full text-sm ss:text-base"
                >
                  로그인
                </Link>
              </UserButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
