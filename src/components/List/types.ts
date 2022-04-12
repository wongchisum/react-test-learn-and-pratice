import type { ReactNode } from "react";

// 描述渲染行的数据类型
export type RowRenderType<T> =
  | ReactNode
  | ((item: T, index: number) => ReactNode)
  | undefined;

export type ListProps<T extends any> = {
  // 列表数据源
  data: T[];
  // 自定义渲染的方法
  rowRender?: RowRenderType<T>;
};
