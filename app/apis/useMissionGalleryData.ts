import { IChurchNotice, IMissionGalleryAll } from "@/utils/types/churchData";
import { useQuery } from "@tanstack/react-query";

const getMissionGallery = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/mission-gallery/`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

const useFetchMissionGallery = () => {
  const { data, isLoading, isError, error } = useQuery<IMissionGalleryAll>({
    queryKey: ["churchmissiongallery"],
    queryFn: getMissionGallery,
  });

  return { data, isLoading, isError, error };
};
export default useFetchMissionGallery;
