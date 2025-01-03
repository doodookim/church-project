"use client";

import useFetchNotice from "@/app/apis/useFacilityData";
import React from "react"

export default function ChurchFacility() {
    const { data, isLoading } = useFetchNotice();
    if (isLoading)
      return (
        <div className="min-h-lvh text-center align-center text-[30px]">
          로딩 중...
        </div>
      );
  
    return(
    <div>
      {data?.map((facility)=>(
        <div key={facility.id}>
            <h2 className="text-[#578FCC] text-2xl">시설 안내</h2>
          <img className="text-center mt-10 w-[94.4%]" src={facility.image_files} alt="시설안내내" />
        </div>
      ))}
    </div>
    );
  }