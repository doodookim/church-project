interface IVerifyCode {
  email: string;
  code: string;
}
interface IVerifyCodeRequest {
  email: string;
  code: string;
  setIsVerifyCodeDone: React.Dispatch<React.SetStateAction<boolean>>;
}

export type { IVerifyCode, IVerifyCodeRequest };
