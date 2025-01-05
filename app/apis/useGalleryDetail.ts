import { INewsListItem } from "@/utils/types/newsData";
import { useQuery } from "@tanstack/react-query";

const getGalleryDetail = async (id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/gallery/${id}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("gallerydetail data fetching 에러", error);
    throw error;
  }
};

export default function useFetchGalleryDetail(id: number) {
  const { data, isLoading } = useQuery<INewsListItem>({
    queryKey: ["gallerydetail", id],
    queryFn: () => getGalleryDetail(id),
  });
  return { data, isLoading };
}
