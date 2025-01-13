interface ISendEmailRequest {
  email: string;
  setIsSendEmailDone: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ISendEmail {
  email: string;
}

export type { ISendEmailRequest, ISendEmail };
