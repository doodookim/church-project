import { IResultSignUpRequest } from "@/app/module/types/sign-up";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";

const signUpRequest = async (signUpInfo: IResultSignUpRequest) => {
  const { router, ...signUpData } = signUpInfo;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/signup/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUpData),
  });

  const data = await res.json();
  console.log(data);
  if (!res.ok) {
    throw new Error(data.message);
  } else {
    const res = await signIn("CredentialId", {
      email: signUpData.email,
      password: signUpData.password,
    });

    if (!res?.ok) throw res;
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
