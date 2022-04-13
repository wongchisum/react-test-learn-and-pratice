import type { SyntheticEvent, ReactNode } from "react";
type ButtonSize = "sm" | "md" | "lg";
type ButtonTheme = "primary" | "danger" | "info";
type ButtonLayout = "inline-block" | "block";

// 按钮点击事件
export type ButtonHandler = (event: SyntheticEvent<HTMLElement>) => void;

export type ButtonProps = {
  // 尺寸
  size?: ButtonSize;
  // 主题色
  theme?: ButtonTheme;
  // 布局
  layout?: ButtonLayout;
  // 子元素
  children?: ReactNode;
  // 点击事件
  onClick?: ButtonHandler;
};
