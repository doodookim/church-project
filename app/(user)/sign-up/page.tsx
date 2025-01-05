import BoxLayout from "@/app/module/components/user/box-layout";
import UserButton from "@/app/module/components/user/button";

import Input from "@/app/module/components/user/input";
import InputBox from "@/app/module/components/user/input-box";
import WarningList from "@/app/module/components/user/sign-up/warning-list";
import TitleLayout from "@/app/module/components/user/title-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "회원가입 | 생명의 빛 교회",
  description: "회원가입 페이지 입니다.",
};

export default function SignUpPage() {
  return (
    <BoxLayout width="650px">
      <div className="w-full max-w-[484px] mx-auto mt-[65px] mb-[104px] font-medium text-[#202020] text-[16px]">
        <WarningList />
        <hr className="mt-[30px] mb-[50px]" />
        <form action="">
          <div>
            <TitleLayout title="개인정보 동의" classNamePlus="mb-[30px]" />
            <div className="w-full h-[150px] border border-solid border-[#ABABAB] rounded-[5px] mb-[20px]">
              asdfasdfasdf
            </div>
            <div className="flex justify-end items-center gap-[8px]">
              <input
                type="radio"
                name="personalConsent"
                id="personalConsent"
                className="cursor-pointer w-[20px] h-[20px]"
              />
              <label htmlFor="personalConsent" className="cursor-pointer">
                동의합니다
              </label>
            </div>
            <hr className="mt-[20px] mb-[20px]" />
            <div className="flex justify-start items-center gap-[8px] mb-[70px]">
              <input
                type="radio"
                name="14Years"
                id="14Years"
                className="cursor-pointer w-[20px] h-[20px]"
              />
              <label htmlFor="14Years" className="cursor-pointer">
                만 14세 이상입니다.
              </label>
            </div>
          </div>

          <TitleLayout title="개인정보 입력" classNamePlus="mb-[30px]" />
          <div className="flex flex-col gap-[12px]">
            <InputBox>
              <label htmlFor="name">이름</label>
              <Input type="text" name="name" id="name" />
            </InputBox>
            <InputBox>
              <label htmlFor="email">이메일(아이디)</label>
              <Input type="email" name="email" id="email" />
            </InputBox>
            <div className="flex mt-[2px] mb-[8px]">
              <div className="flex-[1]"></div>
              <div className="flex-[3] flex justify-between items-start pl-[8px]">
                <div className="text-[#FF7474]">이메일을 입력해 주세요</div>
                <UserButton>이메일 인증</UserButton>
              </div>
            </div>
            <InputBox>
              <label htmlFor="authentication ">인증번호</label>
              <Input type="text" name="authentication" id="authentication" />
            </InputBox>
            <div className="flex mt-[2px] mb-[8px]">
              <div className="flex-[1]"></div>
              <div className="flex-[3] flex justify-between items-start pl-[8px]">
                <div className="text-[#FF7474]">인증번호를 입력해 주세요</div>
                <UserButton>확인</UserButton>
              </div>
            </div>
            <InputBox>
              <label htmlFor="password">비밀번호</label>
              <Input type="password" name="password" id="password" />
            </InputBox>
            <InputBox>
              <label htmlFor="passwordConfirm">비밀번호 확인</label>
              <Input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
              />
            </InputBox>
            <InputBox>
              <label htmlFor="phone">휴대전화</label>
              <Input type="number" name="phone" id="phone" />
            </InputBox>
            <div className="flex justify-end mt-[22px]">
              <UserButton style="confirm">확인</UserButton>
            </div>
          </div>
        </form>
      </div>
    </BoxLayout>
  );
}
