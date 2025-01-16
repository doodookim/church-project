"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import HeaderMenu from "./header-menu";
import { useSession } from "next-auth/react";

export default function HeaderUserButton({ email }: { email?: string }) {
  const userEmail = email?.includes("@")
    ? email?.substring(0, email?.indexOf("@"))
    : email;
  const [isMenu, setIsMenu] = useState(false);
  const session = useSession();
  const clientEmail = session.data?.user.email;

  const clickMenuHandler = () => {
    setIsMenu(!isMenu);
  };

  return (
    <ul
      className={clsx(
        "relative flex justify-center items-center gap-[10px] bg-[#578FCC] text-white rounded-full px-[20px] py-[5px]",
        (email || clientEmail) && "cursor-pointer"
      )}
      onClick={email || clientEmail ? clickMenuHandler : undefined}
    >
      {email || clientEmail ? (
        <>
          <li>{userEmail || clientEmail} 님</li>
          {isMenu && <HeaderMenu clickMenuHandler={clickMenuHandler} />}
        </>
      ) : (
        <>
          <li>
            <Link href={"/sign-in"}>로그인</Link>
          </li>
          <p className="w-[2px] h-[18px] bg-white rounded-full" />
          <li>
            <Link href={"/sign-up"}>회원가입</Link>
          </li>
        </>
      )}
    </ul>
  );
}
