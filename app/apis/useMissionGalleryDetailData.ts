import { IMissionGalleryData } from "@/utils/types/churchData";
import { useQuery } from "@tanstack/react-query";

const getMissionGalleryDetailData = async (
  /* { id }: { id: string } */ id: number
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/notice-board/mission-gallery/${id}`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch data for gallery with id: ${id}`);
  }
  const data = await res.json();
  return data;
};

const useFetchMissionGalleryDetail = (id: number) => {
  const { data, isLoading, isError, error } = useQuery<IMissionGalleryData>({
    queryKey: ["churchmissiongalleryDetail", id],
    queryFn: () => getMissionGalleryDetailData(id),
  });
  return { data, isLoading, isError, error };
};

export default useFetchMissionGalleryDetail;
