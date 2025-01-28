"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IMainMenuList } from "../../types/layout";

import SubMenuList from "./sidebar-sub-menu";
import clsx from "clsx";
import { throttle } from "lodash";

interface INoticeSidebar {
  menuList: IMainMenuList[];
  pathName?: string;
}

export default function Sidebar({ menuList, pathName }: INoticeSidebar) {
  const [fixedMenu, setFixedMenu] = useState(false);

  const clickShowButtonHandler = throttle(() => {
    setFixedMenu(window.scrollY > 300);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", clickShowButtonHandler);

    return () => {
      window.removeEventListener("scroll", clickShowButtonHandler);
      clickShowButtonHandler.cancel();
    };
  }, [clickShowButtonHandler]);
  return (
    <>
      <nav
        className={clsx(
          "hidden md:block w-[30%] lg:w-[234px] h-auto transition-all duration-500",
          fixedMenu && "sticky top-[70px] left-[30px]"
        )}
      >
        <ul className="w-full flex flex-col justify-start items-start gap-[9px] font-semibold text-[20px] text-[#578FCC]">
          {menuList.map(({ id, name, url, isClick, subMenuList }) => {
            return (
              <li key={id} className="w-full">
                <p
                  className={clsx(
                    "w-full h-[40px] border border-solid border-[#A2C3E7] transition-all duration-300",
                    isClick && "bg-[#578FCC] text-white"
                  )}
                >
                  <Link
                    href={url}
                    className={clsx(
                      "w-full h-full flex justify-start items-center pl-[15px]",
                      pathName?.includes("/mission") && "cursor-default"
                    )}
                  >
                    {name}
                  </Link>
                </p>

                {subMenuList && isClick && (
                  <SubMenuList subMenuList={subMenuList} isClick={isClick} />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
