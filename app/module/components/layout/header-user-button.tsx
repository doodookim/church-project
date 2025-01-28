"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import HeaderMenu from "./header-menu";
import { useSession } from "next-auth/react";

export default function HeaderUserButton({
  email,
  clickMenuCloseHandler,
}: {
  email?: string;
  clickMenuCloseHandler?: () => void;
}) {
  const serverEmail = email?.includes("@")
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
  const resultEmail = serverEmail || clientEmail;

  const clickMenuHandler = () => {
    setIsMenu(!isMenu);
  };

  return (
    <ul
      className={clsx(
        "relative flex justify-center items-center gap-[10px] bg-[#578FCC] text-white rounded-full ",
        clickMenuCloseHandler
          ? "text-sm px-[14px] py-[6px]"
          : "px-[20px] py-[5px]",
        resultEmail && !clickMenuCloseHandler && "cursor-pointer"
      )}
      onClick={
        resultEmail && !clickMenuCloseHandler ? clickMenuHandler : undefined
      }
    >
      {resultEmail ? (
        <>
          <li>{resultEmail} 님</li>
          {isMenu && <HeaderMenu clickMenuHandler={clickMenuHandler} />}
        </>
      ) : (
        <>
          <li>
            <Link href={"/sign-in"} onClick={clickMenuCloseHandler}>
              로그인
            </Link>
          </li>
          <p className="w-[2px] h-[18px] bg-white rounded-full" />
          <li>
            <Link href={"/sign-up"} onClick={clickMenuCloseHandler}>
              회원가입
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}
