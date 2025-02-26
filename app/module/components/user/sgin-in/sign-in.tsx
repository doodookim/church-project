"use client";
import React from "react";
import Input from "../input";
import TitleLayout from "../title-layout";
import BoxLayout from "../box-layout";
import { useForm } from "react-hook-form";
import { TSignIn } from "@/app/module/types/sign-in";
import { useSignIn } from "@/app/apis/user/useSignIn";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/app/module/utils/validation/sign-in-register";
import Message from "../message-box";
import Link from "next/link";

export default function SignIn() {
  const { mutate } = useSignIn();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<TSignIn>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: TSignIn) => {
    mutate(data);
  };

  return (
    <BoxLayout width={484}>
      <div className="w-full max-w-[318px] mx-auto pt-[35px] pb-[60px] ss:pt-[55px] ss:pb-[90px] text-sm ss:text-base">
        <TitleLayout title="로그인" classNamePlus="text-sm ss:text-lg" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[6px] ss:gap-[10px] mt-[20px]"
        >
          <Input
            type="email"
            id="email"
            placeholder="이메일 입력"
            {...register("email")}
            classNamePlus="text-sm ss:text-base"
          />
          <Message>{errors.email?.message}</Message>
          <Input
            type="password"
            id="password"
            placeholder="비밀번호 입력"
            {...register("password")}
            classNamePlus="text-sm ss:text-base"
          />
          <Message>{errors.password?.message}</Message>
          <button
            type="submit"
            className="bg-[#578FCC] rounded-[5px] h-[50px] text-white font-bold text-sm ss:text-base mt-[10px]"
          >
            로그인
          </button>
        </form>
        <div className="w-full bg-[#FFE135] rounded-[5px] h-[50px] font-bold text-sm ss:text-base mt-[12px]">
          <Link
            href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`}
            className="w-full h-full flex justify-center items-center"
          >
            카카오톡으로 로그인
          </Link>
        </div>
        <div className="flex justify-end items-center gap-[10px] leading-none mt-[20px]">
          <Link href={"/find-password"} className="leading-none p-0 m-0">
            비밀번호 찾기
          </Link>
          <p className="bg-gray-03 w-[1px] h-[13px]" />
          <Link href={"/sign-up"} className="text-primary leading-none p-0 m-0">
            회원 가입
          </Link>
        </div>
      </div>
    </BoxLayout>
  );
}
