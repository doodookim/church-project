"use client";

import { INewsList } from "@/utils/types/newsData";
import Image from "next/image";
import Link from "next/link";

interface IGalleryProps {
  data: INewsList | undefined;
  isLoading: boolean;
}

export default function NewsGalleryList({ data, isLoading }: IGalleryProps) {
  if (!data?.results.length) {
    return <div>아직 등록된 사진이 없어요</div>;
  }
  if (isLoading) return <div>로딩 중이에요</div>;
  return (
    <div className="mt-[40px]">
      <div className="grid grid-cols-3 gap-6">
        {data?.results.map((gallery) => (
          <div
            key={gallery.id}
            className="items-center text-center pb-4 cursor-pointer p-4 rounded"
          >
            <Link
              href={`/news/gallery/${gallery.id}`}
              className="flex flex-col items-center gap-[30px] "
            >
              <div key={gallery.id} className="relative w-[200px] h-[200px]">
                <Image
                  src={gallery.gallery_thumb_img.image_files}
                  alt="교회소식사진"
                  className="object-cover rounded-lg"
                  fill={true}
                />
              </div>

              <h2 className="text-lg font-bold">{gallery.title}</h2>
              <p className="text-sm">{gallery.date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
