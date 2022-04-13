import { isType } from "../../utils/type";
const _isNum = isType("number");

// 判断是否为整数
const isIntNum = (num: number) => num % 1 === 0;

export function getInitNum(num?: any): number {
  if (_isNum(num) && isIntNum(num as number)) {
    return num;
  }
  return 0;
}
