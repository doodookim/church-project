import { INewsImg } from "@/utils/types/newsData";
import { useQuery } from "@tanstack/react-query";

const getNewsWeeklyRecent = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/weekly-recent`
  );
  const data = res.json();
  return data;
};

export default function useFetchNewsWeeklyRecent() {
  const { data, isLoading } = useQuery<INewsImg[]>({
    queryKey: ["newsWeeklyRecent"],
    queryFn: () => getNewsWeeklyRecent(),
  });
  return { data, isLoading };
}
