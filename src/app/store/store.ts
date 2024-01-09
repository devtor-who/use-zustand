import { create } from "zustand";

type BearState = {
  bears: number;
  increase: (by: number) => void;
  getBears: () => number;
};

export const useBearStore = create<BearState>((set, get) => ({
  bears: 0,
  getBears: () => get().bears,
  increase: (by: number) => set((state) => ({ bears: state.bears + by })),
}));

export const unsubLogStore = useBearStore.subscribe(console.log);
