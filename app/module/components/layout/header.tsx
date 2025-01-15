// "use client";
import React from "react";
import { HEADER_MENU_LIST } from "./constant";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import Link from "next/link";
import { getServerSession } from "next-auth";
import HeaderUserButton from "./header-user-button";
import { getToken } from "next-auth/jwt";
import { useSession } from "next-auth/react";

export default async function Header() {
  const session = await getServerSession();
  const email = session?.user?.email;

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
        <HeaderUserButton email={email} />
      </div>
    </header>
  );
}
