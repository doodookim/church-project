import { INewsListItem } from "@/utils/types/newsData";
import { useQuery } from "@tanstack/react-query";

const getMainWeekly = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/main-weekly`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("메인주보 데이터 불러오기 실패", error);
    throw error;
  }
};

export default function useMainNWeeklyData() {
  const { data, isLoading } = useQuery<INewsListItem[]>({
    queryKey: ["mainWeeklyList"],
    queryFn: getMainWeekly,
  });
  return { data, isLoading };
}
