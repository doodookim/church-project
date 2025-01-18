import { create } from "zustand";

interface IFindPassword {
  email: string;
  verifyCode: string;
  isEmailVerify: boolean;
  setEmail: (value: string) => void;
  setVerify: (value: string) => void;
  setIsEmailVerify: () => void;
}

const useFindPasswordStore = create<IFindPassword>()((set) => ({
  email: "",
  verifyCode: "",
  isEmailVerify: false,
  setEmail: (value) => set((state) => ({ ...state, email: value })),
  setVerify: (value) => set((state) => ({ ...state, verifyCode: value })),
  setIsEmailVerify: () => set((state) => ({ ...state, isEmailVerify: true })),
}));

export default useFindPasswordStore;
