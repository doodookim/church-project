"use client";
import React, { useEffect } from "react";
import BoxLayout from "@/app/module/components/user/box-layout";
import UserButton from "@/app/module/components/user/button";
import TitleLayout from "@/app/module/components/user/title-layout";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useKakao } from "@/app/apis/user/useKakao";

export default function Kakao() {
  const code = useSearchParams().get("code");
  const { push } = useRouter();
  const { mutate } = useKakao();

  useEffect(() => {
    if (!code) {
      alert("잘못된 접근 입니다");
      push("/sign-in");
    } else {
      mutate({ code, push });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] z-50">
      <BoxLayout
        width={650}
        classNamePlus="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div className="mt-[108px] mb-[113px] flex flex-col justify-center items-center gap-[40px]">
          <TitleLayout
            title="로그인에 문제가 생겼습니다"
            classNamePlus="flex justify-center"
          />
          <div className="flex gap-[18px]">
            <UserButton>
              <Link
                href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`}
                className="flex justify-center items-center w-full h-full"
              >
                다시 로그인
              </Link>
            </UserButton>
            <UserButton>
              <Link
                href={"/"}
                className="flex justify-center items-center w-full h-full"
              >
                메인으로
              </Link>
            </UserButton>
          </div>
        </div>
      </BoxLayout>
    </div>
  );
}
