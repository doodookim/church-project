import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { signInSchema } from "../utils/validation/sign-in-register";

type TSignIn = Zod.infer<typeof signInSchema>;

export type { TSignIn };
