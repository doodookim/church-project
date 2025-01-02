"use client";
import Link from "next/link";
import React from "react";
import { IMainMenuList } from "./types";

import SubMenuList from "./sidebar-sub-menu";
import clsx from "clsx";

interface INoticeSidebar {
  menuList: IMainMenuList[];
  pathName?: string;
}

export default function Sidebar({ menuList, pathName }: INoticeSidebar) {
  return (
    <nav className="w-[234px] h-auto">
      <ul className="flex flex-col justify-start items-start gap-[9px] font-semibold text-[20px] text-[#578FCC]">
        {menuList.map(({ id, name, url, isClick, subMenuList }) => {
          return (
            <li key={id} className={clsx("w-full ")}>
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
  );
}
