import { INextGenerationItem } from "@/utils/types/nextGeneration";
import { useQuery } from "@tanstack/react-query";

const getNextGeneration = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/next-generation`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default function useNextGeneration() {
  const { data, isLoading } = useQuery<INextGenerationItem[]>({
    queryKey: ["next-generation"],
    queryFn: () => getNextGeneration(),
  });
  return { data, isLoading };
}
