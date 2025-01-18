"use client";

import useFetchOrganiZation from "@/app/apis/useOrganizationData";
import React from "react";
import LoadingSpinner from "../common/LoadingSpinner";

export default function ChurchOrganization() {
  const { data, isLoading } = useFetchOrganiZation();
  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
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
