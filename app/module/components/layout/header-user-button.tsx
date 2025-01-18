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
  const clientEmail = session.data?.user.email.includes("@")
    ? session.data?.user.email?.substring(
        0,
        session.data?.user.email?.indexOf("@")
      )
    : session.data?.user.email;
  const resultEmail = userEmail || clientEmail;

  const clickMenuHandler = () => {
    setIsMenu(!isMenu);
  };

  return (
    <ul
      className={clsx(
        "relative flex justify-center items-center gap-[10px] bg-[#578FCC] text-white rounded-full px-[20px] py-[5px]",
        resultEmail && "cursor-pointer"
      )}
      onClick={resultEmail ? clickMenuHandler : undefined}
    >
      {resultEmail ? (
        <>
          <li>{resultEmail} 님</li>
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
