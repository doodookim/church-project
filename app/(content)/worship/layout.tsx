"use client";
import { WORSHIP_SIDEBAR_LIST } from "@/app/module/components/layout/constant";
import Sidebar from "@/app/module/components/layout/layout-sidebar";
import useSidebarForce from "@/app/module/hooks/useSidebarForce";
import { useParams, usePathname } from "next/navigation";

export default function WorshipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const { id } = useParams() as { id?: string };
  const { menuList } = useSidebarForce(pathName, WORSHIP_SIDEBAR_LIST, id);

  return (
    <>
      <Sidebar menuList={menuList} />
      <section className="w-[calc(100%-334px)]">{children}</section>
    </>
  );
}
