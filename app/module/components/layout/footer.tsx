"use client";
import React, { useEffect } from "react";
import { FOOTER_INFO_LIST, HEADER_MENU_LIST } from "./constant";
import Image from "next/image";
import FooterLogo from "@/public/assets/footer logo.png";
import Link from "next/link";
import useFooterRefStore from "../../store/useFooterRef";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { setInView } = useFooterRefStore();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    setInView(inView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <footer
      ref={ref}
      className="w-full h-[308px] md:h-[200px] bg-gray-03 text-gray-04 text-[10px]"
    >
      <div className="w-full max-w-[1024px] px-[16px] md:px-[104px] mx-auto h-full flex flex-col justify-center items-center gap-0 md:gap-[15px]">
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-[25px] md:gap-0">
          <ul className="flex flex-col gap-[2px]">
            {FOOTER_INFO_LIST.map(({ id, title, description }) => {
              return (
                <li
                  key={id}
                  className="flex justify-start items-center gap-[8px] font-bold"
                >
                  <span>{title}</span>
                  <p className="bg-gray-04 w-[2px] h-[5.5px] rounded-full" />
                  <span>{description}</span>
                </li>
              );
            })}
          </ul>
          <Link href={"/"}>
            <Image src={FooterLogo} alt="푸터 로고 이미지" priority />
          </Link>
        </div>
        <p className="md:hidden w-full h-[2px] bg-gray-04 rounded-full my-[30px]" />
        <ul className="w-full flex gap-[20px] justify-end">
          {HEADER_MENU_LIST.map(({ id, name, url }) => {
            return (
              <li key={id}>
                <Link href={url} className="font-bold">
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
