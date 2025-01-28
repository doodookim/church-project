"use client";
import React, { useEffect, useState } from "react";
import { HEADER_MENU_LIST } from "./constant";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import Link from "next/link";
import HeaderUserButton from "./header-user-button";
import HeaderMobileButton from "./header-mobile-button";
import { throttle } from "lodash";
import clsx from "clsx";

export default function HeaderMain({ email }: { email?: string }) {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);

  const clickShowButtonHandler = throttle(() => {
    const isScrollHeight = window.scrollY > 100;
    const isScrollHeightNot = window.scrollY < 100;
    if (isScrollHeight) {
      setFixedHeader(true);
    } else if (isScrollHeightNot) {
      setAnimateHeader(false);
      const timer = setTimeout(() => {
        setFixedHeader(false);
        clearTimeout(timer);
      }, 300);
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", clickShowButtonHandler);

    return () => {
      window.removeEventListener("scroll", clickShowButtonHandler);
      clickShowButtonHandler.cancel();
    };
  }, [clickShowButtonHandler]);

  useEffect(() => {
    if (fixedHeader) {
      let timer = null;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setAnimateHeader(true);
      }, 100);
    }
  }, [fixedHeader]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 bg-white w-full h-auto z-10 transition-all duration-500",
          animateHeader &&
            "shadow-[0_0_13px_0_rgba(150,150,150,0.3)] bg-white/50"
        )}
      >
        <div className="md:px-[60px] px-[30px] w-full max-w-[1144px] mx-auto h-[60px] flex justify-between items-center">
          <p className="w-[100px]">
            <Link href={"/"}>
              <Image src={Logo} alt="로고 이미지" priority />
            </Link>
          </p>
          <ul className="hidden md:flex justify-center items-center gap-[20px] font-medium text-lg">
            {HEADER_MENU_LIST.map(({ id, name, url }) => {
              return (
                <li key={id}>
                  <Link href={url}>{name}</Link>
                </li>
              );
            })}
          </ul>
          <HeaderMobileButton email={email} />
          <div className="hidden md:block">
            <HeaderUserButton email={email} />
          </div>
        </div>
      </header>
      <div className="h-[60px]" />
    </>
  );
}
