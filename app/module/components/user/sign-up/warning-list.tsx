import React from "react";
import { SIGN_UP_WARNING_LIST } from "../constant";

export default function WarningList() {
  return (
    <ul className="flex flex-col gap-[10px]">
      {SIGN_UP_WARNING_LIST.map((item) => {
        return (
          <li
            key={item}
            className="list-disc marker:text-[#ABABAB] marker:w-[6px] marker:h-[6px]"
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}
