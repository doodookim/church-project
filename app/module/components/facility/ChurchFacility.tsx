"use client";

import useFetchFacility from "@/app/apis/useFacilityData";
import React from "react";
import LoadingSpinner from "../common/LoadingSpinner";

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
          <div>
            <img
              className="text-center mt-10 w-full h-auto"
              src={facility.image_files}
              alt="시설안내"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
