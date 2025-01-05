import { INewsListItem } from "@/utils/types/newsData";
import { useQuery } from "@tanstack/react-query";

const getNewsWeeklyDetail = async (id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/weekly/${id}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("news weekly detail fetching 에러", error);
    throw error;
  }
};

export default function useFetchNewsWeeklyDetail(id: number) {
  const { data, isLoading } = useQuery<INewsListItem>({
    queryKey: ["newsWeeklyListDetail"],
    queryFn: () => getNewsWeeklyDetail(id),
  });
  return { data, isLoading };
}
