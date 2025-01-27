"use client";

import useFetchMissionField from "@/app/apis/useMissionFieldData";
import React from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import Image from "next/image";

export default function ChurchFacility() {
  const { data, isLoading } = useFetchMissionField();
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );

  return (
    <div>
      {data?.map((mission_field) => (
        <div key={mission_field.id}>
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={mission_field.image_files}
              alt="선교지안내"
              fill
              className="object-cover text-center rounded-[10px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
