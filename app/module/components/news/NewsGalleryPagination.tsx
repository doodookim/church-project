"use client";

import Pagination from "../common/Pagination";
import NewsGalleryList from "./list/NewsGalleryList";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useFetchGallery from "@/app/apis/useNewsGalleryData";

export default function NewsGalleryPagination() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;
  const { data, isLoading } = useFetchGallery(currentPage);
  const totalPages = Math.ceil((data?.count || 0) / itemPerPage);
  if (isLoading) return <div>로딩 중입니다!</div>;

  const moveToDetail = (galleryId: number) => {
    router.push(`/news/gallery/${galleryId}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between ">
        <NewsGalleryList data={data} moveToDetail={moveToDetail} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
