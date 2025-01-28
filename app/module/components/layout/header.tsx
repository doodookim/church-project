import React from "react";
import { getServerSession } from "next-auth";
import HeaderMain from "./header-main";

export default async function Header() {
  const session = await getServerSession();
  const email = session?.user?.email;
  return <HeaderMain email={email} />;
}
