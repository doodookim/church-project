"use client";

import useNextGeneration from "@/app/apis/useNextGeneration";
import Image from "next/image";
import LoadingSpinner from "../../common/LoadingSpinner";

export default function NextGeneration() {
  const { data, isLoading } = useNextGeneration();

  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );

  return (
    <div className="-translate-y-10">
      {data?.map((next, idx) => (
        <div key={idx}>
          {/* 유치부 섹션 */}
          <section id="kinder" className="pt-10">
            <h2 className="text-xl ss:text-2xl text-[#578FCC]">유치부</h2>
            <div className="flex flex-col lg:flex-row md:flex-row gap-[30px] pt-[30px] pb-10 border-b border-[#D9D9D9] border-solid ">
              <div className="relative basis-1/2 aspect-square">
                <Image
                  src={next.next_generation_kinder_img.image_files}
                  alt="유치부 소개"
                  fill
                  className="object-cover rounded-[10px]"
                />
              </div>
              <div className="basis-1/2">
                <p className="text-[#202020] text-base leading-3 ss:text-lg ss:leading-5 break-words">
                  {next.kinder_content}
                </p>
              </div>
            </div>
          </section>
          {/* 아동부 섹션 */}
          <section id="child" className="pt-10">
            <h2 className="text-xl ss:text-2xl text-[#578FCC]">아동부</h2>
            <div className="flex flex-col gap-[30px] pt-[30px]  pb-10 border-b border-[#D9D9D9] border-solid  lg:flex-row-reverse md:flex-row-reverse">
              <div className="relative basis-1/2 aspect-square">
                <Image
                  src={next.next_generation_child_img.image_files}
                  alt="아동부 소개"
                  fill
                  className="object-cover rounded-[10px]"
                />
              </div>
              <div className="basis-1/2">
                <p className="text-[#202020] text-base leading-3 ss:text-lg ss:leading-5 break-words">
                  {next.child_content}
                </p>
              </div>
            </div>
          </section>
          {/* 청소년부 섹션 */}
          <section id="youth" className="pt-10">
            <h2 className="text-xl ss:text-2xl text-[#578FCC]">청소년부</h2>
            <div className="flex flex-col lg:flex-row md:flex-row gap-[30px] pt-[30px] pb-10 border-b border-[#D9D9D9] border-solid ">
              <div className="relative basis-1/2 aspect-square">
                <Image
                  src={next.next_generation_youth_img.image_files}
                  alt="청소년부 소개"
                  fill
                  className="object-cover rounded-[10px] "
                />
              </div>
              <div className="basis-1/2">
                <p className="text-[#202020] text-base leading-3 ss:text-lg ss:leading-5 break-words">
                  {next.youth_content}
                </p>
              </div>
            </div>
          </section>
          {/* 청년부 섹션 */}
          <section id="adult" className="pt-10">
            <h2 className="text-xl ss:text-2xl font-bold text-[#578FCC]">
              청년부
            </h2>
            <div className="flex flex-col gap-[30px] pt-[30px]  pb-10  lg:flex-row-reverse md:flex-row-reverse">
              <div className="relative basis-1/2 aspect-square">
                <Image
                  src={next.next_generation_adult_img.image_files}
                  alt="청년부 소개"
                  fill
                  className="object-cover rounded-[10px] "
                />
              </div>
              <div className="basis-1/2">
                <p className="text-[#202020] text-base leading-3 ss:text-lg ss:leading-5 break-words">
                  {next.adult_content}
                </p>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
