import type { ReturnType } from "./types";
import { getInitNum } from "./helper";
import { useState } from "react";
export function useCounter(initCount?: number): ReturnType {
  const [count, updateCount] = useState(getInitNum(initCount));

  // 实现自增1
  const increment = () => {
    updateCount((prevCount: number) => prevCount + 1);
  };

  // 实现自减1
  const decrement = () => {
    updateCount((prevCount: number) => prevCount - 1);
  };

  // 重置
  const reset = () => {
    const _initCount = getInitNum(initCount);
    updateCount(_initCount);
  };

  return [
    count,
    {
      inc: increment,
      dec: decrement,
      reset,
    },
  ];
}
