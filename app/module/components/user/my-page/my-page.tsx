"use client";
import React, { useState } from "react";
import BoxLayout from "../box-layout";
import TitleLayout from "../title-layout";
import DeleteMemberModal from "./delete-member-modal";
import useMyPage from "@/app/apis/user/useMyPage";
import LoadingSpinner from "../../common/LoadingSpinner";

export default function MyPage() {
  const [isModal, setIsModal] = useState(false);

  const { myPageData, isLoading } = useMyPage();

  const handleClick = () => {
    setIsModal((prev) => !prev);
  };
  if (isLoading || !myPageData) {
    return (
      <BoxLayout width={650}>
        <div className="pt-[108px] pb-[113px] flex flex-col justify-center items-center gap-[40px]">
          <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
        </div>
      </BoxLayout>
    );
  }

  return (
    <>
      <BoxLayout width={650}>
        <div className="pt-[108px] pb-[113px] flex flex-col justify-center items-center gap-[40px]">
          {myPageData ? (
            <div className="flex flex-col justify-center items-start gap-[20px] ">
              <TitleLayout
                title={
                  <>
                    <span className="w-[100px] hidden sss:inline-block">
                      이름
                    </span>
                    <span className="mr-6 hidden sss:inline-block">:</span>
                    <span>{myPageData.name}</span>
                  </>
                }
                classNamePlus="flex justify-start text-secondary text-sm ss:text-base"
              />
              <TitleLayout
                title={
                  <>
                    <span className="w-[100px] hidden sss:inline-block">
                      이메일
                    </span>
                    <span className="mr-6 hidden sss:inline-block">:</span>
                    <span>{myPageData.email}</span>
                  </>
                }
                classNamePlus="flex justify-start text-secondary text-sm ss:text-base"
              />
              <TitleLayout
                title={
                  <>
                    <span className="w-[100px] hidden sss:inline-block">
                      휴대폰 번호
                    </span>
                    <span className="mr-6 hidden sss:inline-block">:</span>
                    <span>
                      {myPageData.phone_number
                        .replace("+82", "0")
                        .replace(/[^0-9]/g, "")
                        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}
                    </span>
                  </>
                }
                classNamePlus="flex justify-start text-secondary text-sm ss:text-base"
              />
            </div>
          ) : (
            <TitleLayout
              title="로그인을 해주세요"
              classNamePlus="flex justify-center text-secondary text-sm ss:text-base"
            />
          )}
          <div className="w-full max-w-[160px] sss:max-w-[300px] flex justify-start sss:justify-end items-center gap-[10px] leading-none">
            <button
              className="text-gray-01 leading-none p-0 m-0 text-sm ss:text-base"
              onClick={handleClick}
            >
              회원 탈퇴
            </button>
          </div>
        </div>
      </BoxLayout>
      {isModal && <DeleteMemberModal setIsModal={setIsModal} />}
    </>
  );
}
