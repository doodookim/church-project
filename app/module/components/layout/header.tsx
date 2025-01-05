import React from "react";
import { HEADER_MENU_LIST } from "./constant";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white w-full h-auto">
      <div className="lg:px-0 px-[60px] w-full max-w-[1024px] mx-auto h-[60px] flex justify-between items-center">
        <p className="w-[100px]">
          <Link href={"/"}>
            <Image src={Logo} alt="로고 이미지" />
          </Link>
        </p>
        <ul className="flex justify-center items-center gap-[20px] font-medium text-[18px]">
          {HEADER_MENU_LIST.map(({ id, name, url }) => {
            return (
              <li key={id}>
                <Link href={url}>{name}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="flex justify-center items-center gap-[10px] bg-[#578FCC] text-white rounded-full px-[20px] py-[5px]">
          <li>
            <Link href={"/sign-in"}>로그인</Link>
          </li>
          <p className="w-[2px] h-[18px] bg-white rounded-full" />
          <li>
            <Link href={"/sign-up"}>회원가입</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
