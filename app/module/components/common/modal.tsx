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
        className="fixed top-0 left-0 w-full h-[100vh] bg-black/50 cursor-pointer"
        onClick={deleteModal}
      />
      <BoxLayout
        width={650}
        classNamePlus="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div className="mt-[108px] mb-[113px] flex flex-col justify-center items-center gap-[40px]">
          <TitleLayout title={title} classNamePlus="flex justify-center" />
          <div className="flex gap-[18px]">
            {type === "confirm" && (
              <UserButton
                onClick={() => {
                  if (onClickFunction) {
                    onClickFunction();
                  }
                  deleteModal();
                }}
              >
                확인
              </UserButton>
            )}

            <UserButton onClick={deleteModal}>
              {type === "confirm" ? "취소" : "확인"}
            </UserButton>
          </div>
        </div>
      </BoxLayout>
    </div>
  );
}
