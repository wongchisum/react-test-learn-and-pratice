// 测试用例
export const useCases = {
  string: "string",
  boolean: false,
  number: 2022,
  undefined: undefined,
  null: null,
  symbol: Symbol(5),
  array: [1, 2, 3],
  function: () => {
    console.log("Hello");
  },
  promise: new Promise((resolve) => resolve("OK")),
};
