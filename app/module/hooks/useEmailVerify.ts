import { useEffect, useState } from "react";
import {
  UseFormGetFieldState,
  UseFormGetValues,
  UseFormTrigger,
} from "react-hook-form";
import { TSignUp } from "../types/sign-up-types";
import { UseMutateFunction } from "@tanstack/react-query";
import { ISendEmailRequest } from "../types/send-email-types";
import { IResponseType } from "../types/response-types";

interface IUseEmailVerify {
  getFieldState: UseFormGetFieldState<TSignUp>;
  getValues: UseFormGetValues<TSignUp>;
  trigger: UseFormTrigger<TSignUp>;
  sendEmailData: IResponseType;
  sendEmailMutate: UseMutateFunction<
    unknown,
    Error,
    ISendEmailRequest,
    unknown
  >;
const useEmailVerify = ({
  getFieldState,
  getValues,
  trigger,
  sendEmailData,
  sendEmailMutate,
IUseEmailVerify) => {
  // send email
  const [isSendEmailDone, setIsSendEmailDone] = useState(false);
  const [sendEmailMessage, setSendEmailMessage] = useState("");
  const emailState = getFieldState("email");
  const email = getValues("email");

  const clickSendEmailHandler = () => {
    console.log(!emailState.isDirty);
    console.log(emailState.invalid);
    console.log(emailState.dirtyFields);
    console.log(sendEmailData?.message);
    console.log(isSendEmailDone);
    if (emailState.invalid) {
      trigger(["email"]);
      return;
    }
    sendEmailMutate({ email, setIsSendEmailDone });
  };

  useEffect(() => {
    console.log(emailState.isDirty);
    console.log(emailState.invalid);
    console.log(sendEmailData?.message);
    console.log(isSendEmailDone);
    if (!emailState.isDirty || emailState.invalid) return;
    if (isSendEmailDone && sendEmailData) {
      setSendEmailMessage(sendEmailData?.message);
    } else if (!isSendEmailDone && !sendEmailData) {
      setSendEmailMessage("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSendEmailDone, sendEmailData]);

  return {
    isSendEmailDone,
    sendEmailMessage,
    clickSendEmailHandler,
  };
};

export { useEmailVerify };
