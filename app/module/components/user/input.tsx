import clsx from "clsx";
import React from "react";

interface IInput {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  classNamePlus?: string;
}

export default function Input({
  type,
  name,
  id,
  placeholder,
  classNamePlus,
}: IInput) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={clsx(
        "text-[16px] font-medium py-[13px] border-b border-solid border-[#ABABAB] focus:outline-none",
        classNamePlus
      )}
    />
  );
}
