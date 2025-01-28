import React, { useEffect, useState } from "react";
import { HEADER_MENU_LIST } from "./constant";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import Link from "next/link";
import { getServerSession } from "next-auth";
import HeaderUserButton from "./header-user-button";
import HeaderMobileButton from "./header-mobile-button";
import { throttle } from "lodash";
import clsx from "clsx";
import HeaderMain from "./header-main";

export default async function Header() {
  const session = await getServerSession();
  const email = session?.user?.email;
  return <HeaderMain email={email} />;
}
