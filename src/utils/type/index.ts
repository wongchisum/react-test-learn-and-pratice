const _toString = Object.prototype.toString;
const _toLower = String.prototype.toLocaleLowerCase;

/**
 * getDataType([]) -> array
 * getDataType({}) -> object
 * getDataType(10) -> number
 * getDataType([]) -> array
 * @param data
 * @returns typeName:string 类型名称的全小写
 */
export function getDataType(data?: any) {
  const typeName = (_toString.call(data) as string).slice(8, -1);
  return _toLower.call(typeName);
}

/**
 *
 * isType("Array") isType("array") -> (data:any) => "array" === getDataType(data)
 * @param typeName:string
 * @returns 用于生成类型判断的函数
 *
 */
export function isType(typeName: string) {
  return function (data?: any) {
    return getDataType(data) === _toLower.call(typeName);
  };
}
