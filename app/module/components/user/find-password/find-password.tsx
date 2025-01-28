"use client";
import { useState } from "react";
import BoxLayout from "../box-layout";
import ConfirmModal from "./confirm-modal";
import VerifyEmail from "./verify-email";
import NewPassword from "./new-password";
import clsx from "clsx";
import useFindPasswordStore from "@/app/module/store/useFindPasswordStore";

export default function FindPassword() {
  const [isModal] = useState(false);
  const { isEmailVerify } = useFindPasswordStore();

  return (
    <>
      <BoxLayout
        width={650}
        classNamePlus="relative h-[280px] ss:h-[350px] overflow-hidden"
      >
        <div
          className={clsx(
            "absolute top-[50%] translate-y-[-50%] w-[80%] transition-all duration-300",
            isEmailVerify
              ? "left-[-100%] translate-x-0"
              : "left-[50%] translate-x-[-50%]"
          )}
        >
          <VerifyEmail />
        </div>
        <div
          className={clsx(
            "absolute top-[50%] translate-y-[-50%] w-[80%] transition-all duration-300",
            isEmailVerify
              ? "left-[50%] translate-x-[-50%]"
              : "left-[100%] translate-x-0"
          )}
        >
          <NewPassword />
        </div>
      </BoxLayout>
      {isModal && <ConfirmModal />}
    </>
  );
}
