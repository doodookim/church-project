"use client";

import useFetchNotice from "@/app/apis/useOrganiData";
import React from "react"

export default function ChurchOrganization() {
  const { data, isLoading } = useFetchNotice();
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        로딩 중...
      </div>
    );

  return(
  <div>
    {data?.map((organization)=>(
      <div key={organization.id}>

        <img className="text-center mt-[30px]" src={organization.image_files} alt="교회 조직" />
      </div>
    ))}
  </div>
  );
}