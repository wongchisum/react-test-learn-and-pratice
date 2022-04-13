import { useState } from "react";
import { getInitBool } from "./helper";
import type { ReturnType } from "./types";

export function useBool(initState?: any): ReturnType {
  const [state, updateState] = useState(getInitBool(initState));

  // 切换当前的状态
  const toggle = () => {
    updateState((prevState: boolean) => !prevState);
  };

  // 切换为true
  const setTrue = () => {
    updateState(true);
  };

  // 切换为fale
  const setFalse = () => {
    updateState(false);
  };

  return [
    state,
    {
      toggle,
      setTrue,
      setFalse,
    },
  ];
}
