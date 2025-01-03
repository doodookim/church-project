import NewsList from "@/app/module/components/news/NewsList";
import { Metadata } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

export const metadata: Metadata = {
  title: "교회 소식 | 생명의 빛 교회",
  description: "교회 소식 페이지 입니다.",
};

export default function NewsPage() {
  const router = useRouter();
  const { page } = router.query;
  return (
    <div>
      <div>교회 소식</div>
      <NewsList />
    </div>
  );
}
