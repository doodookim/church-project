import { INewsListResponse } from "@/utils/types/newsData";
import { useQuery } from "@tanstack/react-query";

const getNewsData = async () => {
  const res = await fetch("https://api.llch.co.kr/notice-board/church-news/");
  const data = await res.json();
  return data;
};

const useFetchNews = () => {
  const { data, isLoading } = useQuery<INewsListResponse>({
    queryKey: ["newsList"],
    queryFn: getNewsData,
  });

  return { data, isLoading };
};
export default useFetchNews;
