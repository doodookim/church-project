"use client";
import { useSession } from "next-auth/react";
import React from "react";
import useMobileMenuStore from "../../store/useMobileMenuStore";

export default function HeaderMobileButton({ email }: { email?: string }) {
  const { setMobileMenu } = useMobileMenuStore();
  const userEmail = email?.includes("@")
    ? email?.substring(0, email?.indexOf("@"))
    : email;
  const session = useSession();
  const clientEmail = session.data?.user.email.includes("@")
    ? session.data?.user.email?.substring(
        0,
        session.data?.user.email?.indexOf("@")
      )
    : session.data?.user.email;
  const resultEmail = userEmail || clientEmail;

  const handleClick = () => {
    setMobileMenu();
  };

  return (
    <div
      className="flex justify-end items-center md:hidden gap-[20px]"
      onClick={handleClick}
    >
      {resultEmail && <div>{resultEmail} 님</div>}
      <div className="flex flex-col justify-center items-center gap-[5px] w-[33px] cursor-pointer group">
        <p className="w-full h-[4px] bg-secondary rounded-full group-hover:bg-gray-03 transition-all duration-300" />
        <p className="w-full h-[4px] bg-secondary rounded-full group-hover:bg-gray-03 transition-all duration-300" />
        <p className="w-full h-[4px] bg-secondary rounded-full group-hover:bg-gray-03 transition-all duration-300" />
      </div>
    </div>
  );
}
