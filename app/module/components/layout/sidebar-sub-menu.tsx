"use client";
import { useEffect, useRef, useState } from "react";
import { ISubMenuList } from "../../types/layout";
import clsx from "clsx";
import Link from "next/link";

export default function SubMenuList({
  subMenuList,
  isClick,
}: {
  subMenuList?: ISubMenuList[];
  isClick: boolean;
}) {
  const [isToggle, setIsToggle] = useState(false);
  const subMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (subMenuRef.current) {
      const ulHeight = subMenuRef.current?.scrollHeight;

      if (subMenuList && isClick && ulHeight > 0) {
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
        "text-[#636363] text-lg transition-all duration-[1s] overflow-hidden",
        isToggle ? "my-[10px] max-h-[500px]" : "my-0 max-h-[0px]"
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
