import { create } from "zustand";

interface IFooterRef {
  inView: boolean;
  setInView: (value: boolean) => void;
}

const useFooterRefStore = create<IFooterRef>()((set) => ({
  inView: false,
  setInView: (value) => set((state) => ({ ...state, inView: value })),
}));

export default useFooterRefStore;
