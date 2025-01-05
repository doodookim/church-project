"use client";
import { usePathname } from "next/navigation";
import { layoutTitle } from "../module/utils/layout-title";

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const title = layoutTitle(pathName);

  return (
    <section className="flex flex-col justify-start items-center w-full min-h-[calc(100vh-60px)] bg-[#F9F9F9]">
      <h1 className="text-[28px] font-bold text-[#578FCC] my-[58px] leading-none">
        {title}
      </h1>
      {children}
    </section>
  );
}
