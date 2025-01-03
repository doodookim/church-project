"use client";

import useFetchNotice from "@/app/apis/useNoticeData";
import React from "react";

export default function ChurchNotice() {
  const { data, isLoading } = useFetchNotice();
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        로딩 중...
      </div>
    );

  return (
    <div>
      {data?.map((info,index) => (
        <div key={index}>
          
          <section className="max-w-[1024px]">
            {/* 교회소개 */}
            <div className="border-b-2 border-[#D9D9D9] pb-[150px] w-[97%] m-auto">
              <h2 className="text-[#578FCC] text-2xl">교회소개</h2>
              <p className="mt-10 text-lg leading-7">{info.church_info_content}</p>
              <img className="text-center mt-[30px]" src={info.church_info_img.image_files} alt="교회 전경" />
            </div>

            {/* 목사소개 */}
            <div className="border-b-2 border-[#D9D9D9] pb-[150px] w-[97%] m-auto mt-[100px]">
            <h2 className="text-[#578FCC] text-2xl">담임 목사 소개</h2>
              <p className="mt-10 text-lg leading-7">{info.pastor_info_content}</p>
              <img className="text-center mt-[30px]" src={info.pastor_img.image_files} alt="담임목사" />
            </div>

          {/* 표어 */}
          <div className="border-b-2 border-[#D9D9D9] pb-[150px] w-[97%] m-auto mt-[100px]">
          <h2 className="text-[#578FCC] text-2xl">표어</h2>
            <img className="h-[964px] text-center mt-10 md:w-[484px]" src={info.slogan_img.image_files} alt="교회 슬로건" />
          </div>

          {/* 예배안내 */}
          <div className="border-b-2 border-[#D9D9D9] pb-[150px] w-[97%] m-auto mt-[100px]">
          <h2 className="text-[#578FCC] text-2xl">예배 안내</h2>
            <img className="h-[400px] text-center mt-5" src={info.worship_time_img.image_files} alt="예배 시간" />
          </div>

          {/* 오시는길 */}
          <div className="border-b-2 border-[#D9D9D9] pb-[150px] w-[97%] m-auto mt-[100px]">
          <h2 className="text-[#578FCC] text-2xl">오시는 길</h2>
            <p>교회 위치: {info.location}</p>
          </div> 

        </section>
      </div>
     ))}
   </div>
  );
}
