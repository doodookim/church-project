import React from "react";
import { HEADER_MENU_LIST } from "./constant";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full max-w-[1024px] mx-auto h-[60px] flex justify-between items-center">
      <p className="w-[100px]">
        <Link href={"/"}>
          <Image src={Logo} alt="로고 이미지" />
        </Link>
      </p>
      <ul className="flex justify-center items-center gap-[20px] font-medium text-[18px] text-[#202020]">
        {HEADER_MENU_LIST.map(({ id, name, url }) => {
          return (
            <li key={id}>
              <Link href={url}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center items-center gap-[10px] bg-[#578FCC] text-white rounded-full px-[20px] py-[5px]">
        <button>로그인</button>
        <p className="w-[2px] h-[18px] bg-white rounded-full" />
        <button>회원가입</button>
      </div>
    </header>
  );
}
