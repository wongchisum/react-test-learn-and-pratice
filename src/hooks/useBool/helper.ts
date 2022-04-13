import { isType } from "../../utils/type";

const _isBool = isType("boolean");
export function getInitBool(target?: any): boolean {
  if (_isBool(target)) {
    return target as boolean;
  } else {
    return false;
  }
}
