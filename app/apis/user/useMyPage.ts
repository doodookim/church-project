import useModalStore from "@/app/module/store/useModalStore";
import { IToken } from "@/app/module/types/token";
import { useQuery } from "@tanstack/react-query";
import { constants } from "buffer";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const getMyPage = async (token: IToken) => {
  const { access, refresh } = token;
  if (access && refresh) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/my-page/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access}`,
        },
      }
    );
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.detail);
    }
    return data;
  }
};

const useMyPage = () => {
  const { data } = useSession();
  const access = data?.user.access;
  const refresh = data?.user.refresh;
  const { push } = useRouter();
  const email = data?.user.email;
  const { showModal } = useModalStore();
  const {
    data: myPageData,
    isLoading,
    isError,
    error,
  } = useQuery<IMyPage>({
    queryKey: ["my-page"],
    queryFn: () => getMyPage({ access, refresh }),
    enabled: !!email,
  });

  useEffect(() => {
    if (isError) {
      if (
        (error instanceof Error &&
          error.message === "찾을 수 없는 사용자입니다") ||
        error.message.includes("토큰")
      ) {
        showModal({
          title: "다시 로그인을 해주세요",
          onClickFunction: () => {
            signOut({ redirect: true });
            push("/");
          },
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, error]);

  return { myPageData, isLoading };
};

export default useMyPage;
