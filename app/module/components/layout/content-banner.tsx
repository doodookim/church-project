"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Banner from "@/public/assets/banner.png";
import { usePathname } from "next/navigation";
import { layoutTitle } from "../../utils/layout-title";

export default function ContentBanner() {
  const pathName = usePathname();
  const [contentTitle, setContentTitle] = useState("");

  useEffect(() => {
    setContentTitle(layoutTitle(pathName));
  }, [pathName]);

  return (
    <section className="flex justify-center items-center relative w-full h-[150px] bg-[#578FCC]">
      <Image
        src={Banner}
        alt="배너 이미지"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 80vw"
        style={{ objectFit: "cover", objectPosition: "50% 15%" }}
        className="z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/45" />
      <h3 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-3xl text-white">
        {contentTitle}
      </h3>
    </section>
  );
}
