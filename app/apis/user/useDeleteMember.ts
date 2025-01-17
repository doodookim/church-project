import useModalStore from "@/app/module/store/useModalStore";
import { useMutation } from "@tanstack/react-query";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const deleteMember = async (access?: string) => {
  if (access) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/my-page/`,
      {
        method: "DELETE",
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
    return res;
  }
};

const useDeleteMember = () => {
  const { push } = useRouter();
  const { showModal } = useModalStore();
  const session = useSession();
  const access = session.data?.user.access;

  const { data, mutate, isPending, isError, error } = useMutation({
    mutationKey: ["delete-member"],
    mutationFn: () => deleteMember(access),
  });

  useEffect(() => {
    if (isError) {
      if (
        error instanceof Error &&
        error.message === "찾을 수 없는 사용자입니다"
      ) {
        showModal({
          title: "다시 로그인을 해주세요",
          onClickFunction: () => {
            signOut();
          },
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, error]);

  useEffect(() => {
    if (data?.ok) {
      showModal({
        title: "회원탈퇴가 완료되었습니다. ",
        onClickFunction: () => {
          signOut({ redirect: false });
          push("/");
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { mutate, isPending };
};

export default useDeleteMember;
