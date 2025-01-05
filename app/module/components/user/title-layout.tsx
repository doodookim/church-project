import clsx from "clsx";
import React from "react";

export default function TitleLayout({
  title,
  classNamePlus,
}: {
  title: string;
  classNamePlus?: string;
}) {
  return (
    <h3
      className={clsx(
        "w-full max-[318px] text-[18px] font-bold",
        classNamePlus
      )}
    >
      {title}
    </h3>
  );
}
