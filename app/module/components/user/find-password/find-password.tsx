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
        classNamePlus="pt-[60px] pb-[72px] overflow-hidden"
      >
        <div
          className={clsx(
            "w-[1300px] flex justify-start items-center flex-shrink-0 gap-[166px] px-[83px] transition-all duration-500",
            isEmailVerify && "translate-x-[calc(-50%)]"
          )}
        >
          <VerifyEmail />
          <NewPassword />
        </div>
      </BoxLayout>
      {isModal && <ConfirmModal />}
    </>
  );
}
