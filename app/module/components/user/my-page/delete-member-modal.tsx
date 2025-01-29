import React, { Dispatch, SetStateAction } from "react";
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
    <div className="fixed top-0 left-0 w-full h-[100vh] z-50">
      <div
        className="fixed top-0 left-0 w-full h-[100vh] bg-black/50 cursor-pointer"
        onClick={handleClick}
      />
      <div className="px-[40px] fixed w-full max-w-[564px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="w-full bg-white rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.05)]">
          <div className="py-[80px] ss:py-[110px] flex flex-col justify-center items-center gap-[40px]">
            <TitleLayout
              title="정말로 회원을 탈퇴하시겠습니까?"
              classNamePlus="flex justify-center text-sm ss:text-base"
            />
            <div className="flex gap-[9px] ss:gap-[18px]">
              <UserButton
                onClick={clickDeleteMemberHandler}
                className="text-sm ss:text-base w-[120px] h-[38px] ss:w-[150px] ss:h-[42px] rounded-full transition-all duration-300 flex justify-center items-center"
              >
                동의
              </UserButton>
              <UserButton
                onClick={handleClick}
                className="text-sm ss:text-base w-[120px] h-[38px] ss:w-[150px] ss:h-[42px] rounded-full transition-all duration-300 flex justify-center items-center"
              >
                취소
              </UserButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
