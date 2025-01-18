import React, { Dispatch, SetStateAction } from "react";
import BoxLayout from "../box-layout";
import TitleLayout from "../title-layout";
import UserButton from "../button";
import useDeleteMember from "@/app/apis/user/useDeleteMember";

export default function DeleteMemberModal({
  setIsModal,
}: {
  setIsModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { mutate } = useDeleteMember();

  const handleClick = () => {
    setIsModal(false);
  };
  const clickDeleteMemberHandler = () => {
    mutate();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[100vh]">
      <div
        className="fixed top-0 left-0 w-full h-[100vh] bg-black/50 cursor-pointer"
        onClick={handleClick}
      />
      <BoxLayout
        classNamePlus="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        width={484}
      >
        <div className="my-[110px] flex flex-col justify-center items-center gap-[40px]">
          <TitleLayout
            title="정말로 회원을 탈퇴하시겠습니까?"
            classNamePlus="flex justify-center"
          />
          <div className="flex gap-[18px]">
            <UserButton onClick={clickDeleteMemberHandler}>동의</UserButton>
            <UserButton onClick={handleClick}>취소</UserButton>
          </div>
        </div>
      </BoxLayout>
    </div>
  );
}
