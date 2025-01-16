import { useEffect, useState } from "react";
import {
  UseFormGetFieldState,
  UseFormGetValues,
  UseFormTrigger,
} from "react-hook-form";
import { TSignUp } from "../types/sign-up";
import { UseMutateFunction } from "@tanstack/react-query";
import { ISendEmailRequest } from "../types/send-email";
import { IResponseType } from "../types/response";

interface IUseEmailVerify {
  getFieldState: UseFormGetFieldState<TSignUp>;
  getValues: UseFormGetValues<TSignUp>;
  trigger: UseFormTrigger<TSignUp>;
  sendEmailData: IResponseType;
  // verifyCodeData: IResponseType;
  sendEmailMutate: UseMutateFunction<
    unknown,
    Error,
    ISendEmailRequest,
    unknown
  >;
  // verifyCoedMutate: UseMutateFunction<
  //   unknown,
  //   Error,
  //   IVerifyCodeRequest,
  //   unknown
  // >;
}

const useEmailVerify = ({
  getFieldState,
  getValues,
  trigger,
  sendEmailData,
  // verifyCodeData,
  sendEmailMutate,
}: // verifyCoedMutate,
IUseEmailVerify) => {
  // send email
  const [isSendEmailDone, setIsSendEmailDone] = useState(false);
  const [sendEmailMessage, setSendEmailMessage] = useState("");
  const emailState = getFieldState("email");
  const email = getValues("email");

  const clickSendEmailHandler = () => {
    if (emailState.invalid) {
      trigger(["email"]);
      return;
    }
    sendEmailMutate({ email, setIsSendEmailDone });
  };

  useEffect(() => {
    if (!emailState.isDirty || emailState.invalid) return;
    if (isSendEmailDone && sendEmailData) {
      setSendEmailMessage(sendEmailData?.message);
    } else if (!isSendEmailDone && !sendEmailData) {
      setSendEmailMessage("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSendEmailDone, sendEmailData]);

  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  // verify code 백앤드 로직에 따른 주석 추후 기획변경을 위해 주석처리
  // const [isVerifyCodeDone, setIsVerifyCodeDone] = useState(false);
  // const [verifyCodeMessage, setVerifyCodeMessage] = useState("");
  // const verifyCodeState = getFieldState("verifyCode");
  // const code = getValues("verifyCode");

  // const clickVerifyCodeHandler = () => {
  //   if (!emailState.isDirty || emailState.invalid) {
  //     trigger(["email"]);
  //     return;
  //   }
  //   if (!verifyCodeState.isDirty || verifyCodeState.invalid) {
  //     trigger(["verifyCode"]);
  //     return;
  //   }
  //   verifyCoedMutate({ email, code, setIsVerifyCodeDone });
  // };

  // useEffect(() => {
  //   if (!verifyCodeState.isDirty || verifyCodeState.invalid) return;
  //   if (isVerifyCodeDone && verifyCodeData) {
  //     setVerifyCodeMessage(verifyCodeData?.message);
  //   } else if (!isVerifyCodeDone && !verifyCodeData) {
  //     setVerifyCodeMessage("");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isVerifyCodeDone, verifyCodeData]);

  return {
    isSendEmailDone,
    sendEmailMessage,
    clickSendEmailHandler,
    // clickVerifyCodeHandler,
  };
};

export { useEmailVerify };
