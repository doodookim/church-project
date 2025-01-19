"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { MOBILE_SIDE_MENU } from "./constant";
import { useSession } from "next-auth/react";

export default function MobileMenuLIst({ email }: { email?: string }) {
  const serverEmail = email?.includes("@")
    ? email?.substring(0, email?.indexOf("@"))
    : email;
  const session = useSession();
  const clientEmail = session.data?.user.email.includes("@")
    ? session.data?.user.email?.substring(
        0,
        session.data?.user.email?.indexOf("@")
      )
    : session.data?.user.email;
  const resultEmail = serverEmail || clientEmail;

  const [menuList, setMenuList] = useState([...MOBILE_SIDE_MENU]);
  const [subMenuHeight, setSubMenuHeight] = useState(0);
  const handleClick = (id: number) => {
    const copyList = [...menuList];

    const clickList = copyList.map((item) => {
      return item.id === id
        ? { ...item, isClick: !item.isClick }
        : { ...item, isClick: false };
    });
    const clickItem = copyList.filter((item) => item.id === id);
    setSubMenuHeight(
      clickItem[0].isClick ? clickItem[0].subMenuList.length * 34 + 20 : 0
    );
    setMenuList([...clickList]);
  };

  return (
    <div className="fixed top-0 right-0 z-50 overflow-auto">
      <div className="fixed top-0 right-0 w-full h-[100vh] bg-black/50" />
      <nav className="fixed top-0 right-0 w-[60%] sm:w-[45%] h-[100vh] bg-white">
        <ul className="flex flex-col justify-center items-center font-semibold text-[20px] text-[#578FCC] pt-[30px]">
          {resultEmail ? (
            <li>{resultEmail} 님</li>
          ) : (
            <li className="w-full flex justify-center items-center h-[60px] gap-[20px]">
              <Link href={"/sign-in"}>로그인</Link>
              <span className="w-[2px] h-[16px] bg-secondary" />
              <Link href={"/sign-up"}>회원가입</Link>
            </li>
          )}

          {menuList.map(({ id, name, isClick, subMenuList }) => {
            return (
              <li key={id} className={clsx("w-full")}>
                <div
                  className={clsx(
                    "w-full h-[60px] transition-all duration-300 flex justify-center items-center cursor-pointer",
                    isClick
                      ? "bg-[#578FCC] text-white "
                      : "border-b border-solid border-[#A2C3E7]"
                  )}
                  onClick={() => {
                    handleClick(id);
                  }}
                >
                  {name}
                </div>

                <ul
                  className={clsx(
                    "text-lg transition-all duration-500 h-auto bg-[#f0f0f0] shadow-mobile-menu"
                    // isClick ? `h-[${subMenuList.length * 104 + 20}px] ` : "h-0 "
                  )}
                >
                  {subMenuList?.map(({ id, name, url }) => {
                    return (
                      <li
                        key={id}
                        className="w-full h-[60px] border-b border-solid border-[#A2C3E7] transition-all duration-300 flex justify-center items-center cursor-pointe"
                      >
                        <Link
                          href={url}
                          className="hover:text-secondary transition-all duration-500 "
                        >
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
