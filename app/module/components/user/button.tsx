import clsx from "clsx";
import React from "react";

interface IButton {
  type?: "submit" | "button";
  className?: string;
  classNamePuls?: string;
  style?: "ready" | "confirm";
  onClick?: () => void;
  isDisabled?: boolean;
  children: React.ReactNode;
}

export default function UserButton({
  type = "submit",
  className,
  classNamePuls,
  style = "ready",
  onClick,
  isDisabled = false,
  children,
}: IButton) {
  return (
    <button
      type={type}
      className={clsx(
        className
          ? className
          : "w-[150px] h-[42px] text-[16px] rounded-full transition-all duration-300 flex justify-center items-center",
        classNamePuls,
        isDisabled || style === "confirm"
          ? (isDisabled && "bg-[#578FCC] text-white hover:bg-[#578FCC]") ||
              (!isDisabled && "bg-[#578FCC] text-white hover:bg-[#689fee]")
          : "bg-inherit text-[#ABABAB] border border-solid border-[#ABABAB] hover:bg-[#578FCC] hover:text-white"
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
