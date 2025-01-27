"use client";

import useFetchFacility from "@/app/apis/useFacilityData";
import React from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import Image from "next/image";

export default function ChurchFacility() {
  const { data, isLoading } = useFetchFacility();
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );

  return (
    <div>
      {data?.map((facility) => (
        <div key={facility.id}>
          <h2 className="text-[#578FCC] text-2xl">시설 안내</h2>
          <div className="relative mt-[30px] ss:mt-[60px] w-full aspect-[4/3]">
            <Image
              src={facility.image_files}
              fill
              alt="시설안내"
              className="object-cover rounded-[10px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
