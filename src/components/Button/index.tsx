// import "./index.css";
import type { ButtonProps } from "./types";
import { getClassFromSchema } from "./helper";
import { isType } from "../../utils/type";
import {
  ButtonLayout,
  ButtonSize,
  ButtonTheme,
  DefaultLayout,
  DefaultSize,
  DefaultTheme,
} from "./constant";
import { SyntheticEvent } from "react";
const _isFn = isType("function");

export const Button = (props: ButtonProps) => {
  const { theme, size, children, layout, onClick } = props;
  const sizeClass = getClassFromSchema(DefaultSize, ButtonSize, size);
  const themeClass = getClassFromSchema(DefaultTheme, ButtonTheme, theme);
  const layoutSize = getClassFromSchema(DefaultLayout, ButtonLayout, layout);

  const onClickWrap = (event: SyntheticEvent<HTMLElement>) => {
    event.preventDefault();
    _isFn(onClick) && (onClick as Function)(event);
  };
  return (
    <div
      className={`btn ${sizeClass} ${themeClass} ${layoutSize}`}
      onClick={onClickWrap}
    >
      {children}
    </div>
  );
};
