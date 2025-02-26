"use client";

import useFetchMissionGallery from "@/app/apis/useMissionGalleryData";
import React, { useState } from "react";
import Link from "next/link";
import LoadingSpinner from "../common/LoadingSpinner";
import Pagination from "../common/Pagination";
import { useSearchParams } from "next/navigation";
import useNavigatePage from "../../hooks/useNavigate";
import Image from "next/image";

export default function ChurchMissionGallery() {
  const searchParams = useSearchParams();

  // 최초 페이지 지정
  const defaultPage = 1;
  // 페이지 당 데이터 수 지정
  const itemsPerPage = 6;

  // 페이지 새로고침 시 해당 페이지 렌더링 및 예외처리
  const getParsedPage = (): number => {
    const getPage = searchParams.get("page");
    if (!getPage) return defaultPage;
    const parsedPage = parseInt(getPage, 10);
    if (isNaN(parsedPage) || parsedPage < 1) return defaultPage;
    return parsedPage;
  };

  const [currentPage, setCurrentPage] = useState(getParsedPage);

  const { data, isLoading } = useFetchMissionGallery();

  const totalPages = Math.ceil((data?.count || 0) / itemsPerPage);

  // 페이지 네비게이션 커스텀 훅
  useNavigatePage({
    baseUrl: "/mission/gallery",
    queryParams: { page: currentPage.toString() },
  });
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );

  return (
    <div>
      <div className="grid grid-cols-1 gap-y-10 gap-x-3 ss:grid-cols-2 lg:grid-cols-3">
        {data &&
          data.results.map(
            ({
              mission_gallery_thumb_img: { image_files },
              id,
              date,
              title,
            }) => (
              <div key={id}>
                <ul>
                  <li className="flex flex-col">
                    <Link
                      href={`/mission/gallery/${id}
                      `}
                    >
                      <div className="relative pb-[30px] w-full h-[206px]">
                        <Image
                          src={image_files}
                          alt="갤러리상세이미지"
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, 80vw"
                          className="object-cover rounded-[10px]"
                        />
                      </div>
                      <div className="pb-4">
                        <h2 className="text-lg font-bold mt-[20px]">{title}</h2>
                      </div>
                      <div>
                        <span className="text-[#ABABAB] text-base">{date}</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            )
          )}
      </div>
      {/* pagination*/}
      <div className="flex justify-center items-center mt-[60px] gap-[6px]">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
