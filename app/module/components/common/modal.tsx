"use client";
import React from "react";
import BoxLayout from "../user/box-layout";
import TitleLayout from "../user/title-layout";
import UserButton from "../user/button";
import useModalStore from "../../store/useModalStore";
import clsx from "clsx";

export default function Modal() {
  const { isModal, title, type, onClickFunction, deleteModal } =
    useModalStore();
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-full h-[100vh] z-50",
        isModal ? "block" : "hidden"
      )}
    >
      <div
        className={clsx(
          "fixed top-0 left-0 w-full h-[100vh] bg-black/50 ",
          type === "alert" && onClickFunction ? "" : "cursor-pointer"
        )}
        onClick={type === "alert" && onClickFunction ? undefined : deleteModal}
      />
      <div className="px-[40px] fixed w-full max-w-[564px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="w-full bg-white rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.05)]">
          <div className="py-[80px] ss:py-[110px] flex flex-col justify-center items-center gap-[40px]">
            <TitleLayout
              title={title}
              classNamePlus="text-sm ss:text-base flex justify-center"
            />
            <div className="flex gap-[9px] ss:gap-[18px]">
              <UserButton
                className="text-sm ss:text-base w-[120px] h-[38px] ss:w-[150px] ss:h-[42px] rounded-full transition-all duration-300 flex justify-center items-center"
                onClick={() => {
                  if (onClickFunction) {
                    onClickFunction();
                  }
                  deleteModal();
                }}
              >
                확인
              </UserButton>
              {type === "confirm" && (
                <UserButton
                  className="text-sm ss:text-base w-[120px] h-[38px] ss:w-[150px] ss:h-[42px] rounded-full transition-all duration-300 flex justify-center items-center"
                  onClick={deleteModal}
                >
                  취소
                </UserButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
