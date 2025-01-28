"use client";
import clsx from "clsx";
import { throttle } from "lodash";
import React, { useEffect, useState } from "react";

export default function ToTop() {
  const [fixedTop, setFixedTop] = useState(false);
  const [animateTop, setAnimateTop] = useState(false);

  const clickScrollTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clickShowButtonHandler = throttle(() => {
    const isScrollHeight = window.scrollY > 300;
    const isScrollHeightNot = window.scrollY < 300;

    if (isScrollHeight) {
      setFixedTop(true);
    } else if (isScrollHeightNot) {
      setAnimateTop(false);

      const timer = setTimeout(() => {
        setFixedTop(false);
        clearTimeout(timer);
      }, 300);
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", clickShowButtonHandler);

    return () => {
      window.removeEventListener("scroll", clickShowButtonHandler);
      clickShowButtonHandler.cancel();
    };
  }, [clickShowButtonHandler]);

  useEffect(() => {
    if (fixedTop) {
      let timer = null;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setAnimateTop(true);
      }, 50);
    }
  }, [fixedTop]);

  return (
    <div
      className={clsx(
        "fixed bottom-10 right-10 cursor-pointer [&>svg>circle]:hover:fill-secondary transition-all duration-300 [&>svg>circle]:transition-all [&>svg>circle]:duration-300 [&>svg]:w-[50px] [&>svg]:h-[50px] sm:[&>svg]:w-[68px] sm:[&>svg]:h-[68px]",
        fixedTop ? "block" : "hidden",
        animateTop ? "opacity-100" : "opacity-0"
      )}
      onClick={clickScrollTopHandler}
    >
      <svg
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="34" cy="34" r="34" fill="#202020" />
        <path
          d="M34 19V33M34 19L40 25M34 19L28 25"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.5938 39.6875H28.3594V41.1719H24.8438V51H23.125V41.1719H19.5938V39.6875ZM39.4531 45.3438C39.4531 46.5208 39.2344 47.5495 38.7969 48.4297C38.3594 49.3047 37.7526 49.9792 36.9766 50.4531C36.2057 50.9219 35.3333 51.1562 34.3594 51.1562C33.375 51.1562 32.4948 50.9219 31.7188 50.4531C30.9479 49.9792 30.3438 49.3047 29.9062 48.4297C29.4688 47.5495 29.25 46.5208 29.25 45.3438C29.25 44.1615 29.4688 43.1328 29.9062 42.2578C30.3438 41.3776 30.9479 40.7031 31.7188 40.2344C32.4948 39.7656 33.375 39.5312 34.3594 39.5312C35.3333 39.5312 36.2057 39.7656 36.9766 40.2344C37.7526 40.7031 38.3594 41.3776 38.7969 42.2578C39.2344 43.1328 39.4531 44.1615 39.4531 45.3438ZM37.75 45.3438C37.75 44.4479 37.6042 43.6823 37.3125 43.0469C37.0208 42.4115 36.6172 41.9297 36.1016 41.6016C35.5911 41.2734 35.0104 41.1094 34.3594 41.1094C33.7031 41.1094 33.1172 41.2734 32.6016 41.6016C32.0859 41.9297 31.6823 42.4115 31.3906 43.0469C31.099 43.6823 30.9531 44.4479 30.9531 45.3438C30.9531 46.2396 31.099 47.0052 31.3906 47.6406C31.6823 48.276 32.0859 48.7578 32.6016 49.0859C33.1172 49.4141 33.7031 49.5781 34.3594 49.5781C35.0104 49.5781 35.5911 49.4141 36.1016 49.0859C36.6172 48.7578 37.0208 48.276 37.3125 47.6406C37.6042 47 37.75 46.2344 37.75 45.3438ZM41.3906 39.6875H45.4219C46.2708 39.6875 46.9896 39.8464 47.5781 40.1641C48.1667 40.4766 48.6068 40.9089 48.8984 41.4609C49.1953 42.013 49.3438 42.6458 49.3438 43.3594C49.3438 44.0677 49.1953 44.6979 48.8984 45.25C48.6068 45.8021 48.1667 46.237 47.5781 46.5547C46.9896 46.8724 46.2708 47.0312 45.4219 47.0312H43.1094V51H41.3906V39.6875ZM45.25 45.5625C46.0469 45.5625 46.638 45.3646 47.0234 44.9688C47.4141 44.5677 47.6094 44.0312 47.6094 43.3594C47.6094 42.6823 47.4167 42.1458 47.0312 41.75C46.6458 41.3542 46.0521 41.1562 45.25 41.1562H43.1094V45.5625H45.25Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
