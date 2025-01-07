"use client";
import { useEffect, useRef, useState } from "react";
import { ISubMenuList } from "../../types/layout-types";
import clsx from "clsx";
import Link from "next/link";

export default function SubMenuList({
  subMenuList,
  isClick,
}: {
  subMenuList?: ISubMenuList[];
  isClick: boolean;
}) {
  const [height, setHeight] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const subMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (subMenuRef.current) {
      const ulHeight = subMenuRef.current?.scrollHeight;

      if (subMenuList && isClick && ulHeight > 0) {
        setHeight(`my-[10px] h-[${ulHeight}px]`);
        setIsToggle(true);
      } else {
        setIsToggle(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul
      className={clsx(
        "text-[#636363] text-[18px] transition-all duration-[0.5s] ",
        isToggle ? height : "translate-y-[-50%] scale-y-0 h-0 my-0"
      )}
      ref={subMenuRef}
    >
      {subMenuList?.map(({ id, name, url }) => {
        return (
          <li key={id} className="leading-[34px] pl-[15px]">
            <Link href={url}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
