import { INewsList } from "@/utils/types/newsData";
import { useQuery } from "@tanstack/react-query";

const getNewsData = async (page: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/church-news/?page=${page}`
  );
  const data = await res.json();
  return data;
};

export default function useFetchNews(page: number) {
  const { data, isLoading } = useQuery<INewsList>({
    queryKey: ["newsList", page],
    queryFn: () => getNewsData(page),
  });

  return { data, isLoading };
}
