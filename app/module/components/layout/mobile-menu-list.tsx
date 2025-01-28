"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MOBILE_SIDE_MENU } from "./constant";
import MobileLogo from "@/public/assets/Mobile logo.png";
import Image from "next/image";
import HeaderUserButton from "./header-user-button";
import useMobileMenuStore from "../../store/useMobileMenuStore";
import { signOut } from "next-auth/react";
import useModalStore from "../../store/useModalStore";

export default function MobileMenuLIst({ email }: { email?: string }) {
  const [menuList, setMenuList] = useState([...MOBILE_SIDE_MENU]);
  const { isMobileMenu, setMobileMenu } = useMobileMenuStore();
  const [isAnimateMenu, setIsAnimateMenu] = useState(false);
  const { showModal } = useModalStore();
  const [subMenuHeight, setSubMenuHeight] = useState([
    { id: 0, height: "h-0" },
    { id: 1, height: "h-0" },
    { id: 2, height: "h-0" },
    { id: 3, height: "h-0" },
  ]);

  const handleClick = (id: number) => {
    const copyList = [...menuList];

    const clickList = copyList.map((item) => {
      return item.id === id
        ? { ...item, isClick: !item.isClick }
        : { ...item, isClick: false };
    });
    const clickItem = clickList.filter((item) => item.id === id);
    const copyHeight = [...subMenuHeight];

    if (clickItem[0].isClick && clickItem[0].id === id) {
      const clickHeight = copyHeight.map((item) => {
        return item.id === id
          ? { ...item, height: "h-auto" }
          : { ...item, height: "h-0" };
      });
      setSubMenuHeight([...clickHeight]);
    } else if (!clickItem[0].isClick) {
      let timer = null;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        const clickHeight = copyHeight.map((item) => {
          return { ...item, height: "h-0" };
        });
        setSubMenuHeight([...clickHeight]);
      }, 300);
    }

    setMenuList([...clickList]);
  };
  const clickMenuCloseHandler = () => {
    setIsAnimateMenu(false);
    let timer = null;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setMobileMenu();
    }, 500);
  };

  useEffect(() => {
    if (isMobileMenu) {
      let timer = null;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setIsAnimateMenu(true);
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileMenu]);
  return (
    <div
      className={clsx(
        "fixed top-0 right-0 z-50 overflow-hidden",
        isMobileMenu ? "block" : "hidden"
      )}
    >
      <div
        className="fixed top-0 right-0 w-full h-[100vh] bg-black/50 cursor-pointer"
        onClick={clickMenuCloseHandler}
      />
      <nav
        className={clsx(
          "fixed top-0 w-full max-w-[375px] h-[100vh] bg-white transition-all duration-500",
          isAnimateMenu ? "right-[0] " : "right-[-100%]"
        )}
      >
        <div className="w-full flex flex-col justify-between items-start">
          <div className="w-full h-[60px] bg-secondary flex justify-between items-center px-[16px]">
            <Image src={MobileLogo} alt="모바일 로고 이미지" />
            <div
              className="relative bg-red-300 cursor-pointer"
              onClick={clickMenuCloseHandler}
            >
              <p className="rotate-[45deg] absolute top-[50%] translate-x-[-100%] translate-y-[-50%] w-[24px] h-[4px] bg-white rounded-full"></p>
              <p className="rotate-[-45deg] absolute top-[50%] translate-x-[-100%] translate-y-[-50%] w-[24px] h-[4px] bg-white rounded-full"></p>
            </div>
          </div>
          <ul className="w-full flex flex-col justify-center items-center font-semibold text-[20px]">
            <li className="flex justify-end items-center w-full p-[16px]">
              <HeaderUserButton
                email={email}
                clickMenuCloseHandler={clickMenuCloseHandler}
              />
            </li>
            {menuList.map(({ id, name, isClick, subMenuList }) => {
              return (
                <li key={id} className={clsx(" w-[calc(100%-32px)] mx-[16px]")}>
                  <div
                    className={clsx(
                      "w-full h-[49px] font-bold transition-all duration-300 flex justify-between items-center cursor-pointer border-b border-solid border-gray-01",
                      isClick && "text-secondary"
                    )}
                    onClick={() => {
                      handleClick(id);
                    }}
                  >
                    <p className="transition-all duration-300">{name}</p>
                    <div className="relative bg-red-300 cursor-pointer">
                      <p
                        className={clsx(
                          "absolute top-[50%] translate-x-[calc(-100%-11px)] translate-y-[-50%] w-[18px] h-[3px] rounded-full transition-all duration-300",
                          isClick
                            ? "bg-secondary rotate-[45deg]"
                            : "bg-gray-02 rotate-[-45deg]"
                        )}
                      ></p>
                      <p
                        className={clsx(
                          "absolute top-[50%] translate-x-[calc(-100%)] translate-y-[-50%] w-[18px] h-[3px] bg-secondary rounded-full transition-all duration-300",
                          isClick
                            ? "bg-secondary rotate-[-45deg] "
                            : "bg-gray-02 rotate-[45deg] "
                        )}
                      ></p>
                    </div>
                  </div>

                  <ul
                    className={clsx(
                      "text-sm transition-all duration-500 text-gray-02 overflow-hidden",
                      isClick
                        ? "mb-[12px] h-auto"
                        : "scale-y-0 translate-y-[-100%] opacity-0 mb-0",
                      subMenuHeight[id].height
                    )}
                  >
                    {subMenuList?.map(({ id, name, url }) => {
                      return (
                        <li
                          key={id}
                          className="pl-[16px] w-full transition-all duration-300 flex justify-start items-center cursor-pointer mt-[20px]"
                        >
                          <Link
                            href={url}
                            className="hover:text-secondary transition-all duration-500 "
                            onClick={clickMenuCloseHandler}
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
        </div>
        <div className="flex justify-center items-center border-b border-solid border-gray-01">
          <div
            className={clsx(
              "w-[50%] h-[49px] font-bold transition-all duration-300 hover:text-secondary border-r border-solid border-gray-01"
            )}
          >
            <Link
              href={"/my-page"}
              className="w-full h-full flex justify-center items-center"
              onClick={clickMenuCloseHandler}
            >
              마이페이지
            </Link>
          </div>
          <div
            className={clsx(
              "w-[50%] h-[49px] font-bold transition-all duration-300 flex justify-center items-center cursor-pointer hover:text-secondary"
            )}
            onClick={() => {
              showModal({
                title: "정말로 로그아웃을 하시겠습니까?",
                type: "confirm",
                onClickFunction: signOut,
              });
            }}
          >
            로그아웃
          </div>
        </div>
      </nav>
    </div>
  );
}
