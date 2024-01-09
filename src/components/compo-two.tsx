"use client";
import { useBearStore } from "@/app/store/store";

export function CompoTwo() {
  const inc = useBearStore((state) => state.increase);
  return <button onClick={() => inc(2)}>click</button>;
}
