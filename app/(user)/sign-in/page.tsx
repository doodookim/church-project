import BoxLayout from "@/app/module/components/user/box-layout";
import Input from "@/app/module/components/user/input";
import TitleLayout from "@/app/module/components/user/title-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인 | 생명의 빛 교회",
  description: "로그인 페이지 입니다.",
};

export default function SignInPage() {
  return (
    <BoxLayout width={484}>
      <div className="w-full max-w-[318px] mx-auto mt-[65px] mb-[104px]">
        <TitleLayout title="로그인" />
        <form action="" className="flex flex-col gap-[10px] mt-[20px]">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="이메일 입력"
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="비밀번호 입력"
          />
          <button
            type="submit"
            className="bg-[#578FCC] rounded-[5px] h-[50px] text-white font-bold text-[16px] mt-[10px]"
          >
            로그인
          </button>
        </form>
        <button
          type="submit"
          className="w-full bg-[#FFE135] rounded-[5px] h-[50px] font-bold text-[16px] mt-[12px]"
        >
          카카오톡으로 로그인
        </button>
      </div>
    </BoxLayout>
  );
}
