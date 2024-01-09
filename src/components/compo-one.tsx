"use client";
import { unsubLogStore, useBearStore } from "@/app/store/store";
import { useEffect } from "react";

export function CompoOne() {
  const bears = useBearStore((state) => state.bears);
  const inc = useBearStore((state) => state.increase);

  useEffect(() => {
    setTimeout(() => {
      inc(2);
      unsubLogStore();
    }, 500);
  }, []);
  return <div>{bears}</div>;
}
