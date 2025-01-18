import { INewsListItem } from "@/utils/types/newsData";
import { useQuery } from "@tanstack/react-query";

const getNewsDetail = async (id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/church-news/${id}/`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("news detail fetching 에러", error);
    throw error;
  }
};

export default function useFetchNewsDetail(id: number) {
  const { data, isLoading, isError, error } = useQuery<INewsListItem>({
    queryKey: ["newsListDetail", id],
    queryFn: () => getNewsDetail(id),
  });
  return { data, isLoading, isError, error };
}
