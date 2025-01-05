"use client";
import UserButton from "@/app/module/components/user/button";
import React from "react";
import Input from "@/app/module/components/user/input";
import InputBox from "@/app/module/components/user/input-box";
import TitleLayout from "@/app/module/components/user/title-layout";
import { UseFormReturn } from "react-hook-form";
import ErrorMessage from "../error-message";
import { TSignUp } from "./sign-up";

interface ISignUpForm {
  form: UseFormReturn<TSignUp, unknown, undefined>;
}

export default function SignUpForm({ form }: ISignUpForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: TSignUp) => {
    const { email, name, password, passwordConfirm, phone, isAgeConfirmed } =
      data;

    const numbers =
      "82 " +
      phone
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
        .substring(1);

    const result = {
      name,
      email,
      password,
      password2: passwordConfirm,
      phone_number: numbers,
      is_age_confirmed: isAgeConfirmed,
    };
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TitleLayout title="개인정보 동의" classNamePlus="mb-[30px]" />
        <div className="w-full h-[150px] border border-solid border-[#ABABAB] rounded-[5px] mb-[20px]"></div>
        <div className="flex flex-col items-end gap-[8px]">
          <div className="flex justify-end items-center gap-[8px]">
            <input
              type="checkbox"
              id="isPersonalConfirm"
              className="cursor-pointer w-[20px] h-[20px]"
              {...register("isPersonalConfirm")}
            />
            <label htmlFor="isPersonalConfirm" className="cursor-pointer">
              동의합니다
            </label>
          </div>
          <ErrorMessage>{errors.isPersonalConfirm?.message}</ErrorMessage>
        </div>
        <hr className="mt-[20px] mb-[20px]" />
        <div className="flex flex-col items-start mb-[70px] gap-[8px]">
          <div className="flex justify-start items-center gap-[8px]">
            <input
              type="checkbox"
              id="isAgeConfirmed"
              className="cursor-pointer w-[20px] h-[20px]"
              {...register("isAgeConfirmed")}
            />
            <label htmlFor="isAgeConfirmed" className="cursor-pointer">
              만 14세 이상입니다.
            </label>
          </div>
          <ErrorMessage classNamePlus="pl-[22px]">
            {errors.isAgeConfirmed?.message}
          </ErrorMessage>
        </div>
      </div>

      <TitleLayout title="개인정보 입력" classNamePlus="mb-[30px]" />
      <div className="flex flex-col gap-[12px]">
        <InputBox>
          <label htmlFor="name">이름</label>
          <Input type="text" id="name" {...register("name")} />
        </InputBox>
        <ErrorMessage isLabel={true}>{errors.name?.message}</ErrorMessage>
        <InputBox>
          <label htmlFor="email">이메일(아이디)</label>
          <Input type="email" id="email" {...register("email")} />
        </InputBox>
        <ErrorMessage isLabel={true}>{errors.email?.message}</ErrorMessage>
        <div className="flex justify-end mt-[2px] mb-[8px]">
          <UserButton>이메일 인증</UserButton>
        </div>

        <InputBox>
          <label htmlFor="authentication">인증번호</label>
          <Input
            type="text"
            id="authentication"
            {...register("authentication")}
          />
        </InputBox>
        <div className="flex mt-[2px] mb-[8px]">
          <div className="flex-[1]"></div>
          <div className="flex-[3] flex justify-between items-start pl-[8px]">
            <ErrorMessage>{errors.authentication?.message}</ErrorMessage>
            <UserButton>확인</UserButton>
          </div>
        </div>
        <InputBox>
          <label htmlFor="password">비밀번호</label>
          <Input type="password" id="password" {...register("password")} />
        </InputBox>
        <ErrorMessage isLabel={true}>{errors.password?.message}</ErrorMessage>

        <InputBox>
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          <Input
            type="password"
            id="passwordConfirm"
            {...register("passwordConfirm")}
          />
        </InputBox>
        <ErrorMessage isLabel={true}>
          {errors.passwordConfirm?.message}
        </ErrorMessage>

        <InputBox>
          <label htmlFor="phone">휴대전화</label>
          <Input type="tel" id="phone" {...register("phone")} />
        </InputBox>
        <ErrorMessage isLabel={true}>{errors.phone?.message}</ErrorMessage>

        <div className="flex justify-end mt-[22px]">
          <UserButton style="confirm">확인</UserButton>
        </div>
      </div>
    </form>
  );
}
