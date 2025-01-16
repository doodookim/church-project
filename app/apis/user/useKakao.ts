import { IKakaoRequest } from "@/app/module/types/kakao-request";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";

const kakaoRequest = async ({ code, push }: IKakaoRequest) => {
  const res = await signIn("kakaoId", {
    code,
    redirect: false,
  });
  console.log(res);
  if (!res?.ok) {
    throw new Error(res?.error as string);
  }

  push("/");
  return res;
};

const useKakao = () => {
  const { data, mutate, isPending, isError, error } = useMutation({
    mutationKey: ["kakao"],
    mutationFn: kakaoRequest,
  });

  return { data, mutate, isPending, isError, error };
};

export { useKakao };
