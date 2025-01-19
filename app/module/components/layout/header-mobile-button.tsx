"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

export default function HeaderMobileButton({ email }: { email?: string }) {
  const userEmail = email?.includes("@")
    ? email?.substring(0, email?.indexOf("@"))
    : email;
  const [isMenu, setIsMenu] = useState(false);
  const session = useSession();
  const clientEmail = session.data?.user.email.includes("@")
    ? session.data?.user.email?.substring(
        0,
        session.data?.user.email?.indexOf("@")
      )
    : session.data?.user.email;
  const resultEmail = userEmail || clientEmail;

  return (
    <div className="flex justify-end items-center ">
      <div>{resultEmail}</div>
      <div className="flex flex-col justify-center items-center gap-[7px] w-[33px] cursor-pointer group">
        <p className="w-full h-[3px] bg-gray-03 rounded-full group-hover:bg-secondary transition-all duration-300" />
        <p className="w-full h-[3px] bg-gray-03 rounded-full group-hover:bg-secondary transition-all duration-300" />
        <p className="w-full h-[3px] bg-gray-03 rounded-full group-hover:bg-secondary transition-all duration-300" />
      </div>
    </div>
  );
}
