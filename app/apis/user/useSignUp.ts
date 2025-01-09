import { IResultSignUpRequest } from "@/app/module/types/sign-up";
import { useMutation } from "@tanstack/react-query";

const signUpRequest = async (signUpInfo: IResultSignUpRequest) => {
  const { router, ...signUpData } = signUpInfo;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/signup/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUpData),
  });
  console.log(res);
  const data = await res.json();
  console.log(data);
  if (!res.ok) {
    throw new Error(data.message);
  } else {
    router.push("/success-sign-up");
  }
  return data;
};

const useSignUp = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["sign_up"],
    mutationFn: signUpRequest,
  });

  return { mutate, isPending, isError, error };
};

export { useSignUp };
