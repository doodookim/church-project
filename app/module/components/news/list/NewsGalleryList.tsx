"use client";

import { INewsList } from "@/utils/types/newsData";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "@/app/module/components/common/LoadingSpinner";

interface IGalleryProps {
  data: INewsList | undefined;
  isLoading: boolean;
}

export default function NewsGalleryList({ data, isLoading }: IGalleryProps) {
  if (!data?.results.length) {
    return <div>아직 등록된 사진이 없어요</div>;
  }

  if (isLoading)
    return (
      <div className="min-h-lvh text-center align-center text-[30px]">
        <LoadingSpinner boxSize={3.5} ballSize={0.4} color="#578fcc" />
      </div>
    );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 gap-y-10 ">
        {data?.results.map((gallery) => (
          <div key={gallery.id}>
            <Link href={`/news/gallery/${gallery.id}`}>
              <div key={gallery.id} className="relative  h-[206px] ">
                <Image
                  src={gallery.gallery_thumb_img.image_files}
                  alt="교회소식사진"
                  className="object-cover rounded-[10px]"
                  fill={true}
                />
              </div>
              <h2 className="text-lg font-bold mt-[30px]">{gallery.title}</h2>
              <p className="text-base mt-4 text-[#ABABAB]">{gallery.date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
