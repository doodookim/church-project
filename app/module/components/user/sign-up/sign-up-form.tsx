"use client";
import UserButton from "@/app/module/components/user/button";
import React from "react";
import Input from "@/app/module/components/user/input";
import InputBox from "@/app/module/components/user/input-box";
import TitleLayout from "@/app/module/components/user/title-layout";
import { UseFormReturn } from "react-hook-form";
import Message from "../message-box";
import { TSignUp } from "@/app/module/types/sign-up";
import { useClickSignUpHandler } from "@/app/module/hooks/useClickSignUpHandler";
import { useSendEmail } from "@/app/apis/user/useSendEmail";
import LoadingSpinner from "../../common/LoadingSpinner";
import { useEmailVerify } from "@/app/module/hooks/useEmailVerify";
import { useSignUp } from "@/app/apis/user/useSignUp";

interface ISignUpForm {
  form: UseFormReturn<TSignUp, unknown, undefined>;
}

export default function SignUpForm({ form }: ISignUpForm) {
  const {
    data: sendEmailData,
    isPending: isSendEmailPending,
    mutate: sendEmailMutate,
  } = useSendEmail();
  const { isPending: isSignUpPending } = useSignUp();

  // 백앤드 로직에 따른 주석 추후 기획변경을 위해 주석처리
  // const {
  //   data: verifyCodeData,
  //   isPending: isVerifyCoedPending,
  //   mutate: verifyCoedMutate,
  // } = useVerifyCode();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getFieldState,
    getValues,
    trigger,
  } = form;
  const { isSendEmailDone, sendEmailMessage, clickSendEmailHandler } =
    useEmailVerify({
      getFieldState,
      getValues,
      trigger,
      sendEmailData,
      sendEmailMutate,
    });
  const { onSubmit } = useClickSignUpHandler();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-sm ss:text-base">
      <div>
        <TitleLayout
          title="개인정보 동의"
          classNamePlus="mb-[30px] text-base ss:text-lg"
        />
        <div className="w-full h-[150px] border border-solid border-[#ABABAB] rounded-[5px] mb-[20px]"></div>
        <div className="flex flex-col items-end gap-[8px]">
          <div className="flex justify-end items-center gap-[8px]">
            <input
              type="checkbox"
              id="isPersonalConfirm"
              className="cursor-pointer w-[12px] h-[12px] ss:w-[15px] ss:h-[15px]"
              {...register("isPersonalConfirm")}
            />
            <label htmlFor="isPersonalConfirm" className="cursor-pointer">
              동의합니다
            </label>
          </div>
          <Message>{errors.isPersonalConfirm?.message}</Message>
        </div>
        <hr className="mt-[20px] mb-[20px]" />
        <div className="flex flex-col items-start mb-[70px] gap-[8px]">
          <div className="flex justify-start items-center gap-[8px]">
            <input
              type="checkbox"
              id="isAgeConfirmed"
              className="cursor-pointer w-[12px] h-[12px] ss:w-[15px] ss:h-[15px]"
              {...register("isAgeConfirmed")}
            />
            <label htmlFor="isAgeConfirmed" className="cursor-pointer">
              만 14세 이상입니다.
            </label>
          </div>
          <Message classNamePlus="pl-[22px]">
            {errors.isAgeConfirmed?.message}
          </Message>
        </div>
      </div>

      <TitleLayout
        title="개인정보 입력"
        classNamePlus="mb-[30px] text-base ss:text-lg"
      />
      <div className="flex flex-col gap-[12px]">
        {/* 640px이상 */}
        <div className="hidden sm:flex flex-col gap-[12px]">
          <InputBox>
            <label htmlFor="name">이름</label>
            <Input type="text" id="name" {...register("name")} />
          </InputBox>
          <Message isLabel={true}>{errors.name?.message}</Message>
          <InputBox>
            <label htmlFor="email">이메일(아이디)</label>
            <Input type="email" id="email" {...register("email")} />
          </InputBox>
          {(isSendEmailDone || sendEmailMessage) && (
            <Message isLabel={true} isConfirm={true}>
              ✔ {sendEmailMessage}
            </Message>
          )}
          <Message isLabel={true}>{errors.email?.message}</Message>
          <div className="flex justify-end mt-[2px] mb-[8px]">
            <UserButton
              type="button"
              isDisabled={isSendEmailPending || isSendEmailDone}
              onClick={clickSendEmailHandler}
            >
              {isSendEmailPending ? (
                <LoadingSpinner boxSize={1.2} ballSize={0.2} />
              ) : (
                (isSendEmailDone && "발송 완료") ||
                (!isSendEmailDone && "이메일 인증")
              )}
            </UserButton>
          </div>
          <InputBox>
            <label htmlFor="verifyCode">인증번호</label>
            <Input type="text" id="verifyCode" {...register("verifyCode")} />
          </InputBox>

          {/* /// */}

          <InputBox>
            <label htmlFor="password">비밀번호</label>
            <Input type="password" id="password" {...register("password")} />
          </InputBox>
          <Message isLabel={true}>{errors.password?.message}</Message>
          <InputBox>
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <Input
              type="password"
              id="passwordConfirm"
              {...register("passwordConfirm")}
            />
          </InputBox>
          <Message isLabel={true}>{errors.passwordConfirm?.message}</Message>
          <InputBox>
            <label htmlFor="phone">휴대전화</label>
            <Input type="tel" id="phone" {...register("phone")} />
          </InputBox>
          <Message isLabel={true}>{errors.phone?.message}</Message>
        </div>

        {/* 640px이하 */}
        <div className="flex sm:hidden flex-col gap-[6px]">
          <InputBox>
            <Input
              type="text"
              id="name"
              placeholder="이름"
              {...register("name")}
            />
          </InputBox>
          <Message>{errors.name?.message}</Message>
          <InputBox>
            <Input
              type="email"
              id="email"
              placeholder="이메일 (아이디)"
              {...register("email")}
            />
          </InputBox>
          {(isSendEmailDone || sendEmailMessage) && (
            <Message isConfirm={true}>✔ {sendEmailMessage}</Message>
          )}
          <Message>{errors.email?.message}</Message>
          <div className="flex justify-end mt-[2px] mb-[8px]">
            <UserButton
              type="button"
              className="text-sm ss:text-base w-[120px] h-[38px] ss:w-[150px] ss:h-[42px] rounded-full transition-all duration-300 flex justify-center items-center"
              isDisabled={isSendEmailPending || isSendEmailDone}
              onClick={clickSendEmailHandler}
            >
              {isSendEmailPending ? (
                <LoadingSpinner boxSize={1.2} ballSize={0.2} />
              ) : (
                (isSendEmailDone && "발송 완료") ||
                (!isSendEmailDone && "이메일 인증")
              )}
            </UserButton>
          </div>
          <InputBox>
            <Input
              type="text"
              id="verifyCode"
              placeholder="인증번호"
              {...register("verifyCode")}
            />
          </InputBox>

          {/* /// */}

          <InputBox>
            <Input
              type="password"
              id="password"
              placeholder="비밀번호"
              {...register("password")}
            />
          </InputBox>
          <Message>{errors.password?.message}</Message>
          <InputBox>
            <Input
              type="password"
              id="passwordConfirm"
              placeholder="비밀번호 확인"
              {...register("passwordConfirm")}
            />
          </InputBox>
          <Message>{errors.passwordConfirm?.message}</Message>
          <InputBox>
            <Input
              type="tel"
              id="phone"
              placeholder="휴대전화"
              {...register("phone")}
            />
          </InputBox>
          <Message>{errors.phone?.message}</Message>
        </div>

        <div className="flex justify-end mt-[22px]">
          <UserButton
            isDisabled={isSignUpPending}
            style="confirm"
            className="text-sm ss:text-base w-[120px] h-[38px] ss:w-[150px] ss:h-[42px] rounded-full transition-all duration-300 flex justify-center items-center"
          >
            {isSignUpPending ? (
              <LoadingSpinner boxSize={1.2} ballSize={0.2} />
            ) : (
              "회원 가입"
            )}
          </UserButton>
        </div>
      </div>
    </form>
  );
}

{
  /*  백앤드 로직에 따른 주석 추후 기획변경을 위해 주석처리 */
}
{
  /* {(isVerifyCodeDone || verifyCodeMessage) && (
          <Message isLabel={true} isConfirm={true}>
            ✔ {verifyCodeMessage}
          </Message>
        )}
        <Message>{errors.verifyCode?.message}</Message>
        <div className="flex justify-end mt-[2px] mb-[8px]">
          <UserButton
            type="button"
            isDisabled={isVerifyCoedPending || isVerifyCodeDone}
            onClick={clickVerifyCodeHandler}
          >
            {isVerifyCoedPending ? (
              <LoadingSpinner boxSize={1.2} ballSize={0.2} />
            ) : (
              (isVerifyCodeDone && "인증 완료") || (!isVerifyCodeDone && "확인")
            )}
          </UserButton>
        </div> */
}
