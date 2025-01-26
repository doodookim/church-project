import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type INavigateProps = {
  baseUrl: string;
  queryParams: Record<string, string>;
};

export default function useNavigatePage({
  baseUrl,
  queryParams,
}: INavigateProps) {
  const router = useRouter();

  const prevParamsRef = useRef<Record<string, string>>({});
  useEffect(() => {
    const prevParams = prevParamsRef.current;
    const isChangeParams = Object.keys(queryParams).some(
      (key) => queryParams[key] !== prevParams[key]
    );
    if (isChangeParams) {
      const getQueryString = new URLSearchParams(queryParams).toString();
      router.push(`${baseUrl}?${getQueryString}`);
      prevParamsRef.current = queryParams;
    }
  }, [queryParams, router, baseUrl]);
}
