import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

type BearState = {
  bears: number;
};

type BearAction = {
  increase: (by: number) => void;
  getBears: () => number;
};

export const useBearStore = create<BearState & BearAction>((set, get) => ({
  bears: 0,
  getBears: () => get().bears,
  increase: (by: number) => set((state) => ({ bears: state.bears + by })),
}));

export const useBearStore2 = create<BearState & BearAction>()(
  subscribeWithSelector((set, get) => ({
    bears: 2,
    getBears: () => get().bears,
    increase: (by: number) => set((state) => ({ bears: state.bears + by })),
  })),
);

export const unsubLogStore = useBearStore2.subscribe((state) => state.bears, console.log);
