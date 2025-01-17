import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const newPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
      .max(100, "비밀번호는 100자리 이하이어야 합니다.")
      .refine(
        (value) => passwordRegex.test(value),
        "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."
      ),
    newPasswordConfirm: z
      .string()
      .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
      .max(100, "비밀번호는 100자리 이하이어야 합니다.")
      .refine(
        (value) => passwordRegex.test(value),
        "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."
      ),
  })
  .superRefine(({ newPassword, newPasswordConfirm }, ctx) => {
    if (newPassword !== newPasswordConfirm) {
      // ctx로 특정 필드에 에러 메시지 추가
      ctx.addIssue({
        code: "custom",
        message: "비밀번호가 맞지 않습니다",
        path: ["newPasswordConfirm"],
      });
    }
  });

export { newPasswordSchema };
