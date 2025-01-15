"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import HeaderMenu from "./header-menu";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

export default function HeaderUserButton({
  session,
}: {
  session?: Session | null;
}) {
  const email = session?.user?.email;
  const userEmail = email && email.substring(0, email.indexOf("@"));
  const [isMenu, setIsMenu] = useState(false);

  const clickMenuHandler = () => {
    setIsMenu(!isMenu);
  };

  return (
    <ul
      className={clsx(
        "relative flex justify-center items-center gap-[10px] bg-[#578FCC] text-white rounded-full px-[20px] py-[5px]",
        session && "cursor-pointer"
      )}
      onClick={session ? clickMenuHandler : undefined}
    >
      {session ? (
        <>
          <li>{!email ? "익명" : userEmail} 님</li>
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
