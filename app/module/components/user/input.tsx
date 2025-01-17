import clsx from "clsx";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInput {
  type: string;
  name?: string;
  id: string;
  placeholder?: string;
  classNamePlus?: string;
  register?: (name: string) => UseFormRegisterReturn;
}

export default function Input({
  type,
  name,
  id,
  placeholder,
  classNamePlus,
  ...register
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
      autoComplete="off"
      {...register}
    />
  );
}
