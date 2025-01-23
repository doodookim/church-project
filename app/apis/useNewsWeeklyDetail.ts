import { INewsListItem } from "@/utils/types/newsData";
import { useQuery } from "@tanstack/react-query";

const getNewsWeeklyDetail = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/weekly/${id}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default function useFetchNewsWeeklyDetail(id: string) {
  const { data, isLoading } = useQuery<INewsListItem>({
    queryKey: ["newsWeeklyListDetail"],
    queryFn: () => getNewsWeeklyDetail(id),
  });
  return { data, isLoading };
}
