import { ISermonList } from "@/utils/types/sermonData";
import { useQuery } from "@tanstack/react-query";

// 예배 및 집회 데이터 fetch 카테고리별 분류
export const sermonCategory = {
  sundaySermon: "/notice-board/sunday-sermon",
  sundayWorshipSermon: "/notice-board/sunday-worship-sermon",
  sundayEventSermon: "/notice-board/event-sermon",
} as const;

export const getSermonData = async (
  category: keyof typeof sermonCategory,
  page: number
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}${sermonCategory[category]}/?page=${page}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("예배 및 집회 데이터 불러오기 실패", error);
    throw error;
  }
};

export default function useSermonData(
  category: keyof typeof sermonCategory,
  page: number
) {
  const { data, isLoading } = useQuery<ISermonList>({
    queryKey: ["sermonData", category, page],
    queryFn: () => getSermonData(category, page),
  });
  return { data, isLoading };
}
