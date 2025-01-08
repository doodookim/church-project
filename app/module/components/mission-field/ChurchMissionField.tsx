"use client";

import useFetchMissionField from "@/app/apis/useMissionFieldData";
import React from "react";

export default function ChurchFacility() {
  const { data, isLoading } = useFetchMissionField();
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        로딩 중...
      </div>
    );

  return (
    <div>
      {data?.map((mission_field) => (
        <div key={mission_field.id}>
          <div>
            <img
              className="text-center  w-full h-auto"
              src={mission_field.image_files}
              alt="선교지안내"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
