import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface IKakaoRequest {
  code: string;
  push: (href: string, options?: NavigateOptions) => void;
}
interface IKakao {
  code: string;
}

export type { IKakaoRequest, IKakao };
