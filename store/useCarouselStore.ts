import { create } from "zustand";

interface ICarouselStore {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const useCarouselStore = create<ICarouselStore>((set) => ({
  currentIndex: 0,
  setCurrentIndex: (index) => set({ currentIndex: index }),
}));
