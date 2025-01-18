import { IchurchNotice, IimageData } from "@/utils/types/churchData";
import { useQuery } from "@tanstack/react-query";

const getNoticeData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/church-facilities/`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

const useFetchFacility = () => {
  const { data, isLoading, isError, error } = useQuery<IimageData[]>({
    queryKey: ["churchorfacility"],
    queryFn: getNoticeData,
  });

  return { data, isLoading, isError, error };
};
export default useFetchFacility;
