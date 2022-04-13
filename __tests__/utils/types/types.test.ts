import { getDataType, isType } from "../../../src/utils/type";
import { useCases } from "./constant";

describe("测试getType函数", () => {
  Object.keys(useCases).forEach((key: string) => {
    it(`Test [${key}] type:`, () => {
      expect(getDataType(useCases[key])).toBe(key);
    });
  });
});

describe("测试isType函数", () => {
  Object.keys(useCases).forEach((key: string) => {
    it(`Test is [${key}] type function:`, () => {
      const fn = isType(key);
      expect(fn(useCases[key])).toBe(true);
    });
  });
});
