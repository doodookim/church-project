import { IImageData } from "@/utils/types/churchData";
import { INewsListItem } from "@/utils/types/newsData";
import { ISermonList } from "@/utils/types/sermonData";

export default async function mainData(): Promise<{
  carousel: IImageData[];
  news: INewsListItem[];
  weekly: INewsListItem[];
  recentWorship: ISermonList;
}> {
  const result = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/main-carousel`, {
      cache: "force-cache",
    }).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/main-church-news`, {
      cache: "force-cache",
    }).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/main-weekly`, {
      cache: "force-cache",
    }).then((res) => res.json()),
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/sunday-worship-sermon/?page=1`,
      { cache: "force-cache" }
    )
      .then((res) => res.json())
      .then((data) => ({ ...data, results: data.results.slice(0, 1) })),
  ]).catch(() => {
    throw {
      carousel: [],
      news: [],
      weekly: [],
      recentWorship: null,
    };
  });

  return {
    carousel: result[0],
    news: result[1],
    weekly: result[2],
    recentWorship: result[3],
  };
}
