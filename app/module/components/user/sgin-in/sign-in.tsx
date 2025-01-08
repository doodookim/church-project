"use client";
import React from "react";
import Input from "../input";
import TitleLayout from "../title-layout";
import BoxLayout from "../box-layout";
  return (
    <BoxLayout width={484}>
      <div className="w-full max-w-[318px] mx-auto mt-[65px] mb-[104px]">
        <TitleLayout title="로그인" />
        <form
          className="flex flex-col gap-[10px] mt-[20px]"
        >
          <Input
            type="email"
            id="email"
            placeholder="이메일 입력"
          />
          <Input
            type="password"
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
          type="button"
          className="w-full bg-[#FFE135] rounded-[5px] h-[50px] font-bold text-[16px] mt-[12px]"
        >
          카카오톡으로 로그인
        </button>
      </div>
    </BoxLayout>
  );
}
