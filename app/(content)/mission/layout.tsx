"use client";
import { MISSION_SIDEBAR_LIST } from "@/app/module/components/layout/constant";
import Content from "@/app/module/components/layout/content";
import Sidebar from "@/app/module/components/layout/layout-sidebar";
import { usePathname } from "next/navigation";

export default function MissionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  return (
    <>
      <Sidebar menuList={MISSION_SIDEBAR_LIST} pathName={pathName} />
      <Content>{children}</Content>
    </>
  );
}
