import clsx from "clsx";
import React from "react";

export default function Message({
  children,
  isLabel = false,
  isConfirm = false,
  classNamePlus,
}: {
  children: React.ReactNode;
  isLabel?: boolean;
  isConfirm?: boolean;
  classNamePlus?: string;
}) {
  return (
    <p
      className={clsx(
        "flex",
        classNamePlus,
        isConfirm ? "text-[#7474FF]" : "text-[#FF7474]"
      )}
    >
      {isLabel && <span className="flex-[1]" />}
      <span className="flex-[3] pl-[8px]">{children}</span>
    </p>
  );
}
