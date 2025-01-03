import { IchurchNotice } from "@/utils/types/churchData";
import { useQuery } from "@tanstack/react-query";

const getNoticeData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/church-info/`);
  
    const data = await res.json();
    return data;
  };
  
  const useFetchNotice = () => {
    const { data, isLoading } = useQuery<IchurchNotice[]>({
      queryKey: ["churchinfo"],
      queryFn: getNoticeData,
    });
  
    return { data, isLoading };
  };
  export default useFetchNotice;