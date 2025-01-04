"use client";

import useFetchNotice from "@/app/apis/useOrganiData";
import React from "react";

export default function ChurchOrganization() {
  const { data, isLoading } = useFetchNotice();
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        로딩 중...
      </div>
    );

  return (
    <div>
      {data?.map((organization) => (
        <div key={organization.id}>
          <h2 className="text-[#578FCC] text-2xl">교회 조직</h2>
          <div>
            <img
              className="text-center mt-10 w-full h-auto"
              src={organization.image_files}
              alt="교회 조직"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
