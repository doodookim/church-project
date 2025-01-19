"use client";
import React, { ChangeEvent, useState } from "react";
import UserButton from "../button";
import LoadingSpinner from "../../common/LoadingSpinner";
import { useSendEmail } from "@/app/apis/user/useSendEmail";
import useFindPasswordStore from "@/app/module/store/useFindPasswordStore";
import Message from "../message-box";

export default function VerifyEmail() {
  const [isSendEmailDone, setIsSendEmailDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const {
    email,
    verifyCode,
    isEmailVerify,
    setEmail,
    setVerify,
    setIsEmailVerify,
  } = useFindPasswordStore();
  const { mutate, isPending } = useSendEmail();

  const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changeVerifyCodeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setVerify(e.target.value);
  };

  const handleHeyUp = () => {
    if (!isSendEmailDone) {
      setErrorMsg("인증메일이 발송되지 않았습니다. ");
    } else if (verifyCode.length !== 6) {
      setErrorMsg("인증코드는 6자리 입니다.");
    } else {
      setErrorMsg("");
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsEmailVerify();
      }, 1000);
    }
  };

  const clickSendEmailHandler = () => {
    if (mutate) {
      mutate({
        email,
        setIsSendEmailDone,
      });
    }
  };

  return (
    <div className="w-full flex-auto">
      <div className="w-full flex justify-between items-center">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="이메일 입력"
          onChange={changeEmailHandler}
          className="w-[calc(100%-167px)] text-base font-medium py-[13px] border-b border-solid border-[#ABABAB] focus:outline-none"
        />
        <UserButton
          type="button"
          isDisabled={isPending || isSendEmailDone}
          onClick={clickSendEmailHandler}
        >
          {isPending ? (
            <LoadingSpinner boxSize={1.2} ballSize={0.2} />
          ) : (
            (isSendEmailDone && "발송 완료") ||
            (!isSendEmailDone && "이메일 인증")
          )}
        </UserButton>
      </div>
      <div className="w-full flex justify-between items-end">
        <input
          type="text"
          name="verify"
          id="verify"
          placeholder="인증번호 입력"
          onChange={changeVerifyCodeHandler}
          onKeyUp={handleHeyUp}
          className="w-[calc(100%-167px)] text-base font-medium py-[13px] border-b border-solid border-[#ABABAB] focus:outline-none"
        />
        <UserButton
          isDisabled={isLoading || isEmailVerify}
          style={isLoading || isEmailVerify ? "confirm" : "ready"}
          onClick={handleHeyUp}
        >
          {isLoading ? <LoadingSpinner boxSize={1.2} ballSize={0.2} /> : "확인"}
        </UserButton>
      </div>

      <Message>{errorMsg}</Message>
    </div>
  );
}
