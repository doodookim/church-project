import { ISendEmailRequest } from "@/app/module/types/send-email";
import { useMutation } from "@tanstack/react-query";

const sendEmailRequest = async ({
  email,
  setIsSendEmailDone,
}: ISendEmailRequest) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/send-email/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );
  setIsSendEmailDone(true);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

const useSendEmail = () => {
  const { data, mutate, isPending, isError, error } = useMutation({
    mutationKey: ["send_email"],
    mutationFn: sendEmailRequest,
  });
  return { data, mutate, isPending, isError, error };
};

export { useSendEmail };
