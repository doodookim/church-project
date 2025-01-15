"use client";
import React, { useState } from "react";
import BoxLayout from "../box-layout";
import TitleLayout from "../title-layout";
import Link from "next/link";
import DeleteMemberModal from "./delete-member-modal";
import { Session } from "next-auth";

export default function MyPage({ session }: { session: Session | null }) {
  const email = session?.user?.email;

  const [isModal, setIsModal] = useState(false);

  const handleClick = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <BoxLayout width={650}>
        <div className="mt-[108px] mb-[113px] flex flex-col justify-center items-center gap-[40px]">
          <TitleLayout
            title={`${
              (session && email && email + " 님") ||
              ((session || !email) && "익명 님") ||
              (!session && "로그인을 해주세요")
            } `}
            classNamePlus="flex justify-center text-[#578FCC]"
          />
          {session && (
            <div className="flex items-center gap-[10px] leading-none">
              <Link href={"/find-password"} className="leading-none p-0 m-0">
                비밀번호 찾기
              </Link>
              <p className="bg-gray-03 w-[1px] h-[13px]" />
              <button
                className="text-gray-01 leading-none p-0 m-0"
                onClick={handleClick}
              >
                회원 탈퇴
              </button>
            </div>
          )}
        </div>
      </BoxLayout>
      {isModal && <DeleteMemberModal setIsModal={setIsModal} />}
    </>
  );
}
