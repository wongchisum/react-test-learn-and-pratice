import type { ReactNode } from "react";

export type ResultProps = {
  // 判断结果是否成功
  success?: boolean;
  // 成功状态展示的文字,使用null时不展示，否则未定义展示默认文案
  successContent?: ReactNode;
  // 失败状态展示的文字,使用null时不展示，否则未定义展示默认文案
  failContent?: ReactNode;
};
