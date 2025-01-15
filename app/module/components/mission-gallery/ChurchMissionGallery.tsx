"use client";

import useFetchMissionGallery from "@/app/apis/useMissionGalleryData";
import React from "react";
import Image from "next/image";
import arrow_left from "@/public/assets/arrow-left.png";
import arrow_right from "@/public/assets/arrow-right.png";
import Link from "next/link";
import LoadingSpinner from "../common/LoadingSpinner";

export default function ChurchMissionGallery() {
  const { data, isLoading } = useFetchMissionGallery();
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );

  return (
    <div>
      <div className="grid grid-cols-1 gap-y-10 gap-x-3 md:grid-cols-2 lg:grid-cols-3">
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
                      <div className="pb-[30px] w-full h-[206px]">
                        <img
                          className="object-cover rounded-[10px] w-full h-full"
                          src={image_files}
                          alt="갤러리상세이미지"
                        />
                      </div>
                      <div className="pb-4">
                        <strong className="text-lg ">{title}</strong>
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
      {/* pagenation/ 할 자리 */}
      <div className="flex justify-center items-center mt-[60px] gap-[6px]">
        <div>
          <button
            className="w-[22px] h-[22px] border border-[#D9D9D9] border-solid
          flex justify-center items-center"
          >
            <Image src={arrow_left} alt="화살표 왼쪽" />
          </button>
        </div>
        <div className="flex justify-center items-center gap-[2px]">
          <button className="w-[22px] h-[22px] text-white bg-[#578FCC] text-sm">
            1
          </button>
          <button className="w-[22px] h-[22px] border border-[#D9D9D9] border-solid text-[#ABABAB] text-sm">
            2
          </button>
          <button className="w-[22px] h-[22px] border border-[#D9D9D9] border-solid text-[#ABABAB] text-sm">
            3
          </button>
          <button className="w-[22px] h-[22px] border border-[#D9D9D9] border-solid text-[#ABABAB] text-sm">
            4
          </button>
        </div>
        <div>
          <button
            className="w-[22px] h-[22px] border border-[#D9D9D9] border-solid
          flex justify-center items-center"
          >
            <Image src={arrow_right} alt="화살표 오른쪽" />
          </button>
        </div>
      </div>
    </div>
  );
}
