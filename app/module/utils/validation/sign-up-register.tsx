import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const phoneRegex = /^010\d{8}$/;

const signUpSchema = z
  .object({
    isPersonalConfirm: z.boolean().optional(),
    isAgeConfirmed: z.boolean().optional(),
    name: z
      .string()
      .min(2, {
        message: "글자 수는 최소 2글자 이상이여야 합니다.",
      })
      .max(100, {
        message: "글자수는 최대 100글자 이하여야 합니다.",
      }),
    email: z.string().email({ message: "이메일 형식으로 입력하세요." }),
    password: z
      .string()
      .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
      .max(100, "비밀번호는 100자리 이하이어야 합니다.")
      .refine(
        (value) => passwordRegex.test(value),
        "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."
      ),
    passwordConfirm: z
      .string()
      .min(6, "비밀번호는 최소 6자리 이상이어야 합니다."),
    verifyCode: z.string().min(1, "인증번호를 입력해 주세요."),
    phone: z
      .string()

      .refine(
        (value) => phoneRegex.test(value),
        "010으로 시작하는 11자리 숫자를 입력해 주세요."
      ),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      // ctx로 특정 필드에 에러 메시지 추가
      ctx.addIssue({
        code: "custom",
        message: "비밀번호가 맞지 않습니다",
        path: ["passwordConfirm"],
      });
    }
  })
  .superRefine(({ isPersonalConfirm }, ctx) => {
    if (!isPersonalConfirm || isPersonalConfirm === null) {
      // ctx로 특정 필드에 에러 메시지 추가
      ctx.addIssue({
        code: "custom",
        message: "개인정보 이용에 동의하셔야 합니다",
        path: ["isPersonalConfirm"],
      });
    }
  })
  .superRefine(({ isAgeConfirmed }, ctx) => {
    if (!isAgeConfirmed || isAgeConfirmed === null) {
      // ctx로 특정 필드에 에러 메시지 추가
      ctx.addIssue({
        code: "custom",
        message: "만 14세 이상만 회원가입이 가능합니다",
        path: ["isAgeConfirmed"],
      });
    }
  });

export { signUpSchema };
