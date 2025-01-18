import { ISermonData } from "@/utils/types/sermonData";
import { useQuery } from "@tanstack/react-query";

const getWorshipDetail = async (id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/sermon-detail/${id}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default function useWorshipDetail(id: number) {
  const { data, isLoading } = useQuery<ISermonData>({
    queryKey: ["worshipDetail", id],
    queryFn: () => getWorshipDetail(id),
  });
  return { data, isLoading };
}
