import { useSignUp } from "@/app/apis/user/useSignUp";
import { TSignUp } from "../types/sign-up";
import { useRouter } from "next/navigation";

const useClickSignUpHandler = () => {
  const { mutate } = useSignUp();
  const router = useRouter();

  const onSubmit = (data: TSignUp) => {
    const {
      email,
      name,
      password,
      passwordConfirm,
      verifyCode,
      phone,
      isAgeConfirmed,
    } = data;
    if (isAgeConfirmed) {
      const numbers =
        "+82 " +
        phone
          .replace(/[^0-9]/g, "")
          .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
          .substring(1);

      const result = {
        name,
        email,
        password,
        password2: passwordConfirm,
        phone_number: numbers,
        code: verifyCode,
        is_age_confirmed: isAgeConfirmed,
      };
      mutate({ ...result, router });
    }
  };

  return { onSubmit };
};

export { useClickSignUpHandler };
