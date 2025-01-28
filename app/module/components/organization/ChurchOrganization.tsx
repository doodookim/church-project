"use client";

import useFetchOrganiZation from "@/app/apis/useOrganizationData";
import React from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import Image from "next/image";

export default function ChurchOrganization() {
  const { data, isLoading } = useFetchOrganiZation();
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );

  if (!data) {
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        데이터를 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <div>
      {data?.map((organization) => (
        <div key={organization.id}>
          <h2 className="text-[#578FCC] text-2xl">교회 조직</h2>
          <div className="relative mt-[30px] ss:mt-[60px] w-full aspect-[4/3]">
            <Image
              src={organization.image_files}
              alt="교회 조직"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover rounded-[10px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
