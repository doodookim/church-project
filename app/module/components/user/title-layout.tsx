import clsx from "clsx";
import React from "react";

export default function TitleLayout({
  title,
  classNamePlus,
}: {
  title: React.ReactNode;
  classNamePlus?: string;
}) {
  return (
    <h3 className={clsx("w-full max-[318px] text-lg font-bold", classNamePlus)}>
      {title}
    </h3>
  );
}
