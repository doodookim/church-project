"use client";
import { NOTICE_SIDEBAR_LIST } from "@/app/module/components/layout/constant";
import Sidebar from "@/app/module/components/layout/layout-sidebar";
import useSidebarForce from "@/app/module/hooks/useSidebarForce";

import { usePathname } from "next/navigation";
export default function NoticeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const { menuList } = useSidebarForce(pathName, NOTICE_SIDEBAR_LIST);

  return (
    <>
      <Sidebar menuList={menuList} />
      <section className="w-full md:w-[65%] lg:w-[calc(100%-334px)]">
        {children}
      </section>
    </>
  );
}
