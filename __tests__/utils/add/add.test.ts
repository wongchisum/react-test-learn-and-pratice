import { add } from "../../../src/utils/add";

describe("测试add方法", () => {
  it("测试数组形式入参", () => {
    const total = add([1, 2, 3]);
    expect(total).toBe(6);
  });

  it("测试多个数字类型的参数", () => {
    const total = add(4, 5, 6);
    expect(total).toBe(15);
  });
});
