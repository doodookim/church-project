import { IchurchNotice, IMissionGalleryAll } from "@/utils/types/churchData";
import { useQuery } from "@tanstack/react-query";

const getNoticeData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/mission-gallery/`
  );

  const data = await res.json();
  return data;
};

const useFetchNotice = () => {
  const { data, isLoading, isError, error } = useQuery<IMissionGalleryAll>({
    queryKey: ["churchmissiongallery"],
    queryFn: getNoticeData,
  });

  return { data, isLoading, isError, error };
};
export default useFetchNotice;
