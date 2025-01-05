import React from "react";

export default function InputBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-between items-center [&>label]:flex-[1] [&>label]:leading-none [&>label]:font-semibold [&>input]:flex-[3]">
      {children}
    </div>
  );
}
