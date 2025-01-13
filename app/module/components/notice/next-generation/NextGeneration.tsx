"use client";

import useNextGeneration from "@/app/apis/useNextGeneration";
import Image from "next/image";

export default function NextGeneration() {
  const { data, isLoading } = useNextGeneration();

  if (isLoading) return <div>로딩 중입니다</div>;

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      {data?.map((next, idx) => (
        <div key={idx} className="space-y-20">
          {" "}
          {/* 유치부 섹션 */}
          <section>
            <h2 className="text-xl font-bold text-[#578FCC]">유치부</h2>
            <div className="flex gap-8 items-center mt-10">
              <div className="w-1/2 aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={next.next_generation_kinder_img.image_files}
                  alt="유치부사진"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="w-1/2">
                <p className="text-[#202020]">{next.kinder_content}</p>
              </div>
            </div>
          </section>
          {/* 아동부 섹션 */}
          <section>
            <h2 className="text-xl font-bold text-[#578FCC]">아동부</h2>
            <div className="flex gap-8 items-center flex-row-reverse">
              <div className="w-1/2 aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={next.next_generation_child_img.image_files}
                  alt="아동부 사진"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="w-1/2">
                <p className="text-[#202020]">{next.child_content}</p>
              </div>
            </div>
          </section>
          {/* 청소년부 섹션 */}
          <section>
            <h2 className="text-xl font-bold text-[#578FCC]">청소년부</h2>
            <div className="flex gap-8 items-center">
              <div className="w-1/2 aspect-video relative rounded-lg overflow-hidden mt-10">
                <Image
                  src={next.next_generation_youth_img.image_files}
                  alt="청소년부 사진"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="w-1/2">
                <p className="text-[#202020]">{next.youth_content}</p>
              </div>
            </div>
          </section>
          {/* 청년부 섹션 */}
          <section>
            <h2 className="text-xl font-bold text-[#578FCC]">청년부</h2>
            <div className="flex gap-8 items-center flex-row-reverse">
              <div className="w-1/2 aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={next.next_generation_adult_img.image_files}
                  alt="청년부 사진"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="w-1/2">
                <p className="text-[#202020]">{next.adult_content}</p>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
