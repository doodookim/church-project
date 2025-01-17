import { IResultSignUpRequest } from "@/app/module/types/sign-up";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";

const signUpRequest = async (signUpData: IResultSignUpRequest) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/signup/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUpData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  } else {
    const res = await signIn("CredentialId", {
      email: signUpData.email,
      password: signUpData.password,
      callbackUrl: "/",
    });
    if (!res?.ok) throw res;
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
