interface IFindPasswordRequest {
  email: string;
  code: string;
  new_password: string;
  check_password: string;
  push: (href: string, options?: NavigateOptions) => void;
}
interface IFindPassword {
  email: string;
  code: string;
  new_password: string;
  check_password: string;
}

export type { IFindPasswordRequest, IFindPassword };
