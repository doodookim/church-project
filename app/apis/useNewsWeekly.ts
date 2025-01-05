import { INewsList } from "@/utils/types/newsData";
import { useQuery } from "@tanstack/react-query";

const getNewsWeekly = async (page: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/weekly/?page=${page}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("weekly news fetching 에러", error);
    throw error;
  }
};

export default function useFetchNewsWeekly(page: number) {
  const { data, isLoading } = useQuery<INewsList>({
    queryKey: ["newsWeekly", page],
    queryFn: () => getNewsWeekly(page),
  });
  return { data, isLoading };
}
