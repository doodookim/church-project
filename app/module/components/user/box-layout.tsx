"use client";

import { useState } from "react";

interface IBoxLayout {
  width: string;
  children: React.ReactNode;
}

export default function BoxLayout({ width, children }: IBoxLayout) {
  const [boxWWidth] = useState(width);
  return (
    <div
      className={`w-full max-w-[${boxWWidth}] bg-white mb-[150px] rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.05)]  `}
    >
      {children}
    </div>
  );
}
