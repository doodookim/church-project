import { IImageData } from "@/utils/types/churchData";
import { useQuery } from "@tanstack/react-query";

const getNoticeData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/mission-field/`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

const useFetchMissionField = () => {
  const { data, isLoading, isError, error } = useQuery<IImageData[]>({
    queryKey: ["churchmission-field"],
    queryFn: getNoticeData,
  });
  return { data, isLoading, isError, error };
};
export default useFetchMissionField;
