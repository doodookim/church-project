import { TSignIn } from "@/app/module/types/sign-in";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";

const signInRequest = async (signInInfo: TSignIn) => {
  const res = await signIn("CredentialId", {
    ...signInInfo,
    callbackUrl: "/",
  });

  if (!res?.ok) throw res;
  return res;
};

const useSignIn = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["sign_in"],
    mutationFn: signInRequest,
  });

  return { mutate, isPending, isError, error };
};

export { useSignIn };
