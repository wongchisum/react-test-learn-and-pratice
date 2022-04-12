export function getResult(value?: any): boolean {
  if (typeof value !== "boolean") return false;
  return value;
}

export function isNull(value?: any): value is null {
  return value === null;
}
