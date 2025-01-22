import { INewsListItem } from "@/utils/types/newsData";
import { useQuery } from "@tanstack/react-query";

const getMainNews = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/main-church-news`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("메인뉴스 데이터 불러오기 실패", error);
    throw error;
  }
};

export default function useMainNewsData() {
  const { data, isLoading } = useQuery<INewsListItem[]>({
    queryKey: ["mainNewsList"],
    queryFn: getMainNews,
  });
  return { data, isLoading };
}
