import { IchurchNotice, IimageData } from "@/utils/types/churchData";
import { useQuery } from "@tanstack/react-query";

const getNoticeData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/church-organization/`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

const useFetchOrganiZation = () => {
  const { data, isLoading } = useQuery<IimageData[]>({
    queryKey: ["churchorganization"],
    queryFn: getNoticeData,
  });

  return { data, isLoading };
};
export default useFetchOrganiZation;
