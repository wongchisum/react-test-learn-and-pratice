import type { SyntheticEvent } from "react";
import { isType } from "../../utils/type";
import { ButtonHandler } from "./types";

const _isStr = isType("string");
const _isFn = isType("function");

// 处理枚举和className的映射关系
export const getClassFromSchema = (
  defaultSchema: string,
  schemas: string[],
  currentSchema?: string
) => {
  if (
    _isStr(currentSchema) &&
    schemas.some((schema: string) => schema === currentSchema)
  ) {
    return currentSchema;
  }
  return defaultSchema;
};
