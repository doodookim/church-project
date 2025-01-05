import clsx from "clsx";
import React from "react";

export default function ErrorMessage({
  children,
  isLabel = false,
  classNamePlus,
}: {
  children: React.ReactNode;
  isLabel?: boolean;
  classNamePlus?: string;
}) {
  return (
    <p className={clsx("flex text-[#FF7474]", classNamePlus)}>
      {isLabel && <span className="flex-[1]" />}
      <span className="flex-[3] pl-[8px]">{children}</span>
    </p>
  );
}
