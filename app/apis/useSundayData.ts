import { ISundayList } from "@/utils/types/sunday";
import { useQuery } from "@tanstack/react-query";

const getSundayData = async (page: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/sunday-sermon?=page${page}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default function useSundayData(page: number) {
  const { data, isLoading } = useQuery<ISundayList>({
    queryKey: ["sundayData", page],
    queryFn: () => getSundayData(page),
  });
  return { data, isLoading };
}
