import { INewsListItem } from "@/utils/types/newsData";
import { useQuery } from "@tanstack/react-query";

const getGalleryDetail = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/gallery/${id}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default function useFetchGalleryDetail(id: string) {
  const { data, isLoading } = useQuery<INewsListItem>({
    queryKey: ["gallerydetail", id],
    queryFn: () => getGalleryDetail(id),
  });
  return { data, isLoading };
}
