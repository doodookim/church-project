"use client";
import clsx from "clsx";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import useModalStore from "../../store/useModalStore";

export default function HeaderMenu({
  clickMenuHandler,
}: {
  clickMenuHandler: () => void;
}) {
  const { showModal } = useModalStore();
  const clickLogoutHandler = () => {
    showModal({
      title: "정말로 로그아웃을 하시겠습니까?",
      type: "confirm",
      onClickFunction: signOut,
    });
  };

  return (
    <>
      <p
        className="fixed top-0 left-0 w-full h-[100vh] cursor-pointer z-20"
        onClick={clickMenuHandler}
      />
      <ul
        className={clsx(
          `flex flex-col justify-center items-center bg-white w-[130px] absolute top-[calc(100%+8px)] left-[50%] translate-x-[-50%]
        text-gray-03 border border-solid border-[#ededed] shadow-[0_0_10px_0_rgba(0,0,0,0.05)] rounded-md
        [&>li]:w-full  [&>li]:text-center  [&>li]:py-[5px] [&>li]:transition-all [&>li]:duration-300 z-30`
        )}
      >
        <li className="border-b border-solid border-[#f2f2f2] hover:text-gray-01">
          <Link href={"/my-page"} className="w-full h-full">
            마이페이지
          </Link>
        </li>
        <li
          className="cursor-pointer hover:text-gray-01"
          onClick={clickLogoutHandler}
        >
          로그아웃
        </li>
      </ul>
    </>
  );
}
