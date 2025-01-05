import clsx from "clsx";
import React from "react";

interface IButton {
  type?: "submit" | "button";
  className?: string;
  classNamePuls?: string;
  style?: "ready" | "confirm";
  onClick?: () => void;
  children: React.ReactNode;
}

export default function UserButton({
  type = "submit",
  className,
  classNamePuls,
  style = "ready",
  onClick,
  children,
}: IButton) {
  return (
    <button
      type={type}
      className={clsx(
        className ? className : "w-[150px] h-[42px] text-[16px] rounded-full",
        classNamePuls,
        style === "confirm"
          ? "bg-[#578FCC] text-white"
          : "bg-inherit text-[#ABABAB] border border-solid border-[#ABABAB]"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
