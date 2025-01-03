import { IchurchNotice, IimageData } from "@/utils/types/churchData";
import { useQuery } from "@tanstack/react-query";

const getNoticeData = async () => {
    const res = await fetch("https://api.llch.co.kr/notice-board/church-organization/");
    const data = await res.json();
    return data;
  };
  
  const useFetchNotice = () => {
    const { data, isLoading } = useQuery<IimageData[]>({
      queryKey: ["churchorganization"],
      queryFn: getNoticeData,
    });
  
    return { data, isLoading };
  };
  export default useFetchNotice;