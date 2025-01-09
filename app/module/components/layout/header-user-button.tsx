"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import HeaderMenu from "./header-menu";

export default function HeaderUserButton({ email }: { email?: string }) {
  const userEmail = email && email.substring(0, email.indexOf("@"));
  const [isMenu, setIsMenu] = useState(false);

  const clickMenuHandler = () => {
    setIsMenu(!isMenu);
  };

  return (
    <ul
      className={clsx(
        "relative flex justify-center items-center gap-[10px] bg-[#578FCC] text-white rounded-full px-[20px] py-[5px]",
        email && "cursor-pointer"
      )}
      onClick={email ? clickMenuHandler : undefined}
    >
      {email ? (
        <>
          <li>{userEmail} 님</li>
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
