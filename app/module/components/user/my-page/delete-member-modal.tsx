import React, { Dispatch, SetStateAction } from "react";
import { SIGN_UP_WARNING_LIST } from "../constant";
import BoxLayout from "../box-layout";
import TitleLayout from "../title-layout";
import UserButton from "../button";

export default function DeleteMemberModal({
  setIsModal,
}: {
  setIsModal: Dispatch<SetStateAction<boolean>>;
}) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsModal(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[100vh]">
      <div
        className="fixed top-0 left-0 w-full h-[100vh] bg-black/50 cursor-pointer"
        onClick={(e) => {
          handleClick(e);
        }}
      />
      <BoxLayout
        classNamePlus="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        width={484}
      >
        <div className="my-[110px] flex flex-col justify-center items-center gap-[40px]">
          <TitleLayout
            title="정말로 회원을 탈되하시겠습니까?"
            classNamePlus="flex justify-center"
          />
          <div className="flex gap-[18px]">
            <UserButton>동의</UserButton>
          </div>
        </div>
      </BoxLayout>
    </div>
  );
}
