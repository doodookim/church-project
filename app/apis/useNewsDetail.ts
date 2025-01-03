import { INewsListItem } from "@/utils/types/newsData";
import { useQuery } from "@tanstack/react-query";

const getNewsDetail = async (id: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/church-news/${id}/`
  );
  const data = await res.json();
  return data;
};

const useFetchNewsDetail = (id: number) => {
  const { data, isLoading } = useQuery<INewsListItem>({
    queryKey: ["newsListDetail", id],
    queryFn: () => getNewsDetail(id),
  });
  return { data, isLoading };
};
export default useFetchNewsDetail;
