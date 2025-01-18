"use client";
import BoxLayout from "@/app/module/components/user/box-layout";
import React from "react";
import WarningList from "@/app/module/components/user/sign-up/warning-list";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/app/module/utils/validation/sign-up-register";
import SignUpForm from "./sign-up-form";
import { useForm } from "react-hook-form";
import { TSignUp } from "@/app/module/types/sign-up";

export default function SignUp() {
  const form = useForm<TSignUp>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      verifyCode: "",
      phone: "",
    },
    mode: "onChange",
  });

  return (
    <BoxLayout width={650}>
      <div className="w-full max-w-[484px] mx-auto mt-[65px] mb-[104px] font-medium text-[16px]">
        <WarningList />
        <hr className="mt-[30px] mb-[50px]" />
        <SignUpForm form={form} />
      </div>
    </BoxLayout>
  );
}
