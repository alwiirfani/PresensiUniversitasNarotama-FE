import { create } from "zustand";

const usePreview = create((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: () => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false, data: undefined }),
}));

export default usePreview;
