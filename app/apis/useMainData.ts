import { IImageData } from "@/utils/types/churchData";
import { INewsListItem } from "@/utils/types/newsData";
import { ISermonList } from "@/utils/types/sermonData";

export default async function useMainData(): Promise<{
  carousel: IImageData[];
  news: INewsListItem[];
  weekly: INewsListItem[];
  recentWorship: ISermonList;
}> {
  try {
    const result = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/main-carousel`, {
        cache: "force-cache",
      }).then((res) => res.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/main-church-news`,
        { cache: "force-cache" }
      ).then((res) => res.json()),
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/main-weekly`, {
        cache: "force-cache",
      }).then((res) => res.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/sunday-worship-sermon/?page=1`,
        { cache: "force-cache" }
      )
        .then((res) => res.json())
        .then((data) => ({ ...data, results: data.results.slice(0, 1) })),
    ]);

    return {
      carousel: result[0],
      news: result[1],
      weekly: result[2],
      recentWorship: result[3],
    };
  } catch (error) {
    return {
      carousel: [],
      news: [],
      weekly: [],
      recentWorship: null as any,
    };
  }
}
