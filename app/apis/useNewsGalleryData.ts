import { INewsList } from "@/utils/types/newsData";
import { useQuery } from "@tanstack/react-query";

const getGalleryData = async (page: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/gallery/?page=${page}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default function useFetchGallery(page: number) {
  const { data, isLoading } = useQuery<INewsList>({
    queryKey: ["newsGallery", page],
    queryFn: () => getGalleryData(page),
  });
  return { data, isLoading };
}
