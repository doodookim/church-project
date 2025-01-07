import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { signUpSchema } from "../utils/validation/sign-up-register";

type TSignUp = Zod.infer<typeof signUpSchema>;

interface IResultSignUpData {
  name: string;
  email: string;
  password: string;
  password2: string;
  phone_number: string;
  is_age_confirmed: boolean;
}

interface IResultSignUpRequest {
  name: string;
  email: string;
  password: string;
  password2: string;
  phone_number: string;
  code: string;
  is_age_confirmed: boolean;
  router: AppRouterInstance;
}

export type { TSignUp, IResultSignUpData, IResultSignUpRequest };
