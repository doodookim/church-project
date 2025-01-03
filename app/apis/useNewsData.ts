import { INewsList } from "@/utils/types/newsData";
import { useQuery } from "@tanstack/react-query";

const getNewsData = async (page: number) => {
  const res = await fetch(
    `https://api.llch.co.kr/notice-board/church-news/?page=${page}`
  );
  const data = await res.json();
  return data;
};

const useFetchNews = (page: number) => {
  const { data, isLoading } = useQuery<INewsList>({
    queryKey: ["newsList", page],
    queryFn: () => getNewsData(page),
  });

  return { data, isLoading };
};
export default useFetchNews;
