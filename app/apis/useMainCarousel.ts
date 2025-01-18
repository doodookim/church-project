import { IimageData } from "@/utils/types/churchData";
import { useQuery } from "@tanstack/react-query";

const getMainCarousel = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/main-carousel`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default function useMainCarousel() {
  const { data, isLoading } = useQuery<IimageData[]>({
    queryKey: ["mainCarousel"],
    queryFn: () => getMainCarousel(),
  });
  return { data, isLoading };
}
