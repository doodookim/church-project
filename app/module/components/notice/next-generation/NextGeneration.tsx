"use client";

import useNextGeneration from "@/app/apis/useNextGeneration";
import Image from "next/image";

export default function NextGeneration() {
  const { data, isLoading } = useNextGeneration();
  const next = data && data[0];
  if (isLoading) return <div>로딩 중입니다</div>;
  if (!next) return <div>데이터가 없습니다. </div>;
  return (
    <div className="-translate-y-10">
      {/* 유치부 섹션 */}
      <section id="kinder" className="pt-10">
        <h2 className="text-2xl text-[#578FCC]">유치부</h2>
        <div className="flex flex-col lg:flex-row md:flex-row gap-4 pt-[30px] pb-10 border-b border-[#D9D9D9] border-solid ">
          <div className="basis-1/2">
            <Image
              src={next.next_generation_kinder_img.image_files}
              alt=""
              className="rounded-[10px]"
              width={500}
              height={500}
            />
            {/* <Image
                  src={next.next_generation_kinder_img.image_files}
                  alt="유치부사진"
                  width={318}
                  height={220}
                  className="object-cover rounded-[10px]"
                /> */}
          </div>
          <div className="basis-1/2">
            <h3 className="pb-5">소개글</h3>
            <p className="text-[#202020] text-lg leading-7">
              {next.kinder_content}
            </p>
          </div>
        </div>
      </section>
      {/* 아동부 섹션 */}
      <section id="child" className="pt-10">
        <h2 className="text-2xl text-[#578FCC]">아동부</h2>
        <div className="flex flex-col  gap-4 pt-[30px]  pb-10 border-b border-[#D9D9D9] border-solid  lg:flex-row-reverse md:flex-row-reverse">
          <div className="basis-1/2">
            <Image
              src={next.next_generation_child_img.image_files}
              alt=""
              className="w-full rounded-[10px]"
              width={500}
              height={500}
            />
            {/*  <Image
                  src={next.next_generation_child_img.image_files}
                  alt="아동부 사진"
                  width={318}
                  height={220}
                  className="object-cover rounded-[10px]"
                /> */}
          </div>
          <div className="basis-1/2">
            <h3 className="pb-5">소개글</h3>
            <p className="text-[#202020] text-lg leading-7 ">
              {next.child_content}
            </p>
          </div>
        </div>
      </section>
      {/* 청소년부 섹션 */}
      <section id="youth" className="pt-10">
        <h2 className="text-2xl text-[#578FCC]">청소년부</h2>
        <div className="flex flex-col lg:flex-row md:flex-row gap-4 pt-[30px] pb-10 border-b border-[#D9D9D9] border-solid ">
          <div className="basis-1/2">
            <Image
              src={next.next_generation_youth_img.image_files}
              alt=""
              className="w-full rounded-[10px] "
              width={500}
              height={500}
            />
            {/* <Image
                  src={next.next_generation_youth_img.image_files}
                  alt="청소년부 사진"
                  width={318}
                  height={220}
                  className="object-cover rounded-[10px]"
                /> */}
          </div>
          <div className="basis-1/2">
            <h3 className="pb-5">소개글</h3>
            <p className="text-[#202020] text-lg leading-7">
              {next.youth_content}
            </p>
          </div>
        </div>
      </section>
      {/* 청년부 섹션 */}
      <section id="adult" className="pt-10">
        <h2 className="text-xl font-bold text-[#578FCC]">청년부</h2>
        <div className="flex flex-col  gap-4 pt-[30px]  pb-10 border-b border-[#D9D9D9] border-solid  lg:flex-row-reverse md:flex-row-reverse">
          <div className="basis-1/2">
            <Image
              src={next.next_generation_adult_img.image_files}
              alt=""
              className="rounded-[10px] w-full"
              width={500}
              height={500}
            />
            {/*   <Image
                  src={next.next_generation_adult_img.image_files}
                  alt="청년부 사진"
                  width={318}
                  height={220}
                  className="object-cover rounded-[10px]"
                /> */}
          </div>
          <div className="basis-1/2">
            <h3 className="pb-5">소개글</h3>
            <p className="text-[#202020] text-lg leading-7">
              {next.adult_content}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
