"use client";

import { INewsList } from "@/utils/types/newsData";
import Image from "next/image";

interface IGalleryProps {
  data: INewsList | undefined;
  moveToDetail: (GalleryId: number) => void;
}

export default function NewsGalleryList({ data, moveToDetail }: IGalleryProps) {
  console.log(data);
  if (!data?.results.length) {
    return <div>아직 등록된 사진이 없어요</div>;
  }
  return (
    <div className="border-y-2 mt-[40px]">
      {data?.results.map((gallery) => (
        <div
          key={gallery.id}
          className="flex justify-between items-center text-center border-b boder-gray-200 pb-4 cursor-pointer hover:bg-gray-50 p-4 rounded"
          onClick={() => moveToDetail(gallery.id)}
        >
          <div className="flex items-center gap-[30px] ">
            <div key={gallery.id} className="relative w-[200px] h-[200px]">
              <Image
                src={gallery.gallery_thumb_img.image_files}
                alt="교회소식사진"
                className="object-cover rounded-lg"
                fill={true}
              />
            </div>

            <h2 className="text-lg font-medium">{gallery.title}</h2>
            <p className="text-sm">{gallery.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
