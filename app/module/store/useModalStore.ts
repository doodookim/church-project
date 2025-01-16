import { create } from "zustand";

type ModalType = {
  title: string;
  type?: "alert" | "confirm";
  onClickFunction?: () => void;
};

type Store = {
  isModal: boolean;
  title: string;
  type: "alert" | "confirm";
  onClickFunction?: () => void;
  showModal: (value: ModalType) => void;
  deleteModal: () => void;
};

const useModalStore = create<Store>()((set) => ({
  isModal: false,
  title: "",
  type: "alert",
  onClickFunction: undefined,
  showModal: (value) =>
    set((state) => ({
      ...state,
      isModal: true,
      title: value.title,
      type: value.type ? value.type : "alert",
      onClickFunction: value.onClickFunction
        ? value.onClickFunction
        : undefined,
    })),
  deleteModal: () =>
    set((state) => {
      return { ...state, isModal: false, onClickFunction: undefined };
    }),
}));

export default useModalStore;
