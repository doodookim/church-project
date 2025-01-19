import { ISermonList } from "@/utils/types/sermonData";
import { useQuery } from "@tanstack/react-query";

export const getRecentWorshipData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/sunday-worship-sermon/?page=1`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default function useMainWorshipData() {
  const { data, isLoading } = useQuery<ISermonList>({
    queryKey: ["recentWorshipData"],
    queryFn: getRecentWorshipData,
    select: (data) => ({
      ...data,
      results: data.results.slice(0, 1),
    }),
  });
  return { data, isLoading };
}
