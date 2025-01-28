import { signInSchema } from "../utils/validation/sign-in-register";

type TSignIn = Zod.infer<typeof signInSchema>;

export type { TSignIn };
