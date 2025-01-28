import { create } from "zustand";

interface IMobileMenu {
  isMobileMenu: boolean;
  setMobileMenu: () => void;
}

const useMobileMenuStore = create<IMobileMenu>()((set) => ({
  isMobileMenu: false,
  setMobileMenu: () =>
    set((state) => ({ ...state, isMobileMenu: !state.isMobileMenu })),
}));

export default useMobileMenuStore;
