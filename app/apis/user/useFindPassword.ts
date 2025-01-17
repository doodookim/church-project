import { IFindPasswordRequest } from "@/app/module/types/find-password";
import { useMutation } from "@tanstack/react-query";

const findPasswordRequest = async (findPasswordData: IFindPasswordRequest) => {
  const { push, ...resultData } = findPasswordData;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/change-password/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...resultData }),
    }
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }
  push("/sign-in");
  return data;
};

const useFindPassword = () => {
  const { data, mutate, isPending, isError, error } = useMutation({
    mutationKey: ["find_password"],
    mutationFn: findPasswordRequest,
  });
  return { data, mutate, isPending, isError, error };
};

export { useFindPassword };
