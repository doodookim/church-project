import { IVerifyCodeRequest } from "@/app/module/types/verify-code";
import { useMutation } from "@tanstack/react-query";

const verifyRequest = async ({
  email,
  code,
  setIsVerifyCodeDone,
}: IVerifyCodeRequest) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/verify-code/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, code }),
    }
  );

  setIsVerifyCodeDone(true);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

const useVerifyCode = () => {
  const { data, mutate, isPending, isError, error } = useMutation({
    mutationKey: ["verify_code"],
    mutationFn: verifyRequest,
  });

  return { data, mutate, isPending, isError, error };
};

export { useVerifyCode };
