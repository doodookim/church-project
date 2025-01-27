"use client";

import useFetchNotice from "@/app/apis/useNoticeData";
import React from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import Image from "next/image";

export default function ChurchNotice() {
  const { data, isLoading } = useFetchNotice();
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );

  return (
    <div>
      {data?.map((info, index) => (
        <div key={index}>
          {/* 교회소개 */}
          <div className="flex flex-col border-b-2 border-[#D9D9D9] pb-[50px] ss:pb-[100px] gap-[30px] ss:gap-[40px]">
            <h2 className="text-[#578FCC] text-xl ss:text-2xl">교회소개</h2>
            <p className="text-sm ss:text-lg leading-5 ss:leading-7">
              {info.church_info_content}
            </p>

            <div className="relative w-full aspect-[4/3]">
              <Image
                src={info.church_info_img.image_files}
                fill
                alt="교회 전경"
                className="object-cover rounded-[10px]"
              />
            </div>
          </div>

          {/* 목사소개 */}
          <div className="flex flex-col border-b-2 border-[#D9D9D9] py-[50px] ss:py-[100px] gap-[30px] ss:gap-[40px]">
            <h2 className="text-[#578FCC] text-xl ss:text-2xl">
              담임 목사 소개
            </h2>
            <p className="text-sm ss:text-lg leading-5 ss:leading-7">
              {info.pastor_info_content}
            </p>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={info.pastor_img.image_files}
                fill
                alt="담임목사"
                className="object-cover rounded-[10px]"
              />
            </div>
          </div>
          {/* 표어 */}
          <div className="flex flex-col border-b-2 border-[#D9D9D9] py-[50px] ss:py-[100px] gap-[30px] ss:gap-[40px]">
            <h2 className="text-[#578FCC] text-xl ss:text-2xl">표어</h2>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={info.slogan_img.image_files}
                alt="교회 슬로건"
                fill
                className="text-center object-cover rounded-[10px]"
              />
            </div>
          </div>
          {/* 예배안내 */}
          <div className="flex flex-col border-b-2 border-[#D9D9D9] py-[50px] ss:py-[100px] gap-[30px] ss:gap-[40px]">
            <h2 className="text-[#578FCC] text-xl ss:text-2xl">예배 안내</h2>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={info.worship_time_img.image_files}
                alt="예배 시간"
                fill
                className="text-center object-cover rounded-[10px]"
              />
            </div>
          </div>
          {/* 오시는길 */}
          <div className="flex flex-col border-b-2 border-[#D9D9D9] py-[50px] ss:py-[100px] gap-[30px] ss:gap-[40px]">
            <h2 className="text-[#578FCC] text-xl ss:text-2xl">오시는 길</h2>
            <div className="relative w-full aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d789.3925423799727!2d126.79177015526601!3d37.682806574020354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDQwJzU3LjgiTiAxMjbCsDQ3JzMwLjEiRQ!5e0!3m2!1sko!2skr!4v1735990696947!5m2!1sko!2skr"
                className='absolute inset-0 w-full h-full rounded-[10px]"'
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
