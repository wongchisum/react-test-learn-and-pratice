import type { RowRenderType } from "./types";
import { isValidElement } from "react";
type ArgsType<T> = [data: T, index: number];

export function execRender<T extends any>(
  render: RowRenderType<T>,
  ...args: ArgsType<T>
) {
  if (typeof render === "function") {
    return render(...args);
  } else if (isValidElement(render)) {
    return render;
  } else {
    return null;
  }
}
