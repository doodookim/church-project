import React from "react";

interface IInput {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
}

export default function Input({ type, name, id, placeholder }: IInput) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="text-[16px] font-medium py-[13px] border-b border-solid border-[#ABABAB] focus:outline-none"
    />
  );
}
