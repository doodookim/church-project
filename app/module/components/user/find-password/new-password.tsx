import React from "react";
import Input from "../input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPasswordSchema } from "@/app/module/utils/validation/new-password-register";

import UserButton from "../button";
import useFindPasswordStore from "@/app/module/store/useFindPasswordStore";
import { useFindPassword } from "@/app/apis/user/useFindPassword";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../../common/LoadingSpinner";

type TNewPasswordSchema = Zod.infer<typeof newPasswordSchema>;

export default function NewPassword() {
  const { email, verifyCode } = useFindPasswordStore();
  const { push } = useRouter();
  const { mutate, isPending } = useFindPassword();
  const { register, handleSubmit } = useForm<TNewPasswordSchema>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      newPassword: "",
      newPasswordConfirm: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: TNewPasswordSchema) => {
    console.log(data);
    const result = {
      email: email,
      code: verifyCode,
      new_password: data.newPassword,
      check_password: data.newPasswordConfirm,
      push,
    };
    mutate(result);
  };

  return (
    <div className="w-full flex-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[20px]"
      >
        <Input
          type="password"
          id="newPassword"
          placeholder="새 비밀번호"
          {...register("newPassword")}
        />
        <Input
          type="password"
          id="newPasswordConfirm"
          placeholder="새 비밀번호 확인"
          {...register("newPasswordConfirm")}
        />
        <div className="flex justify-end">
          <UserButton
            isDisabled={isPending}
            style={isPending ? "confirm" : "ready"}
            classNamePuls="mt-[20px]"
          >
            {isPending ? (
              <LoadingSpinner boxSize={1.2} ballSize={0.2} />
            ) : (
              "비밀번호 변경"
            )}
          </UserButton>
        </div>
      </form>
    </div>
  );
}
