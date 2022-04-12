import { isType, getDataType } from "../../type";

const numUseCase = [
  10,
  3.14,
  0,
  Infinity,
  -5,
  new Number(2022),
  0b10000000000000000000000000000000,
  0o10,
  0xfffffffffffffffff,
  1e3,
  NaN,
];

const strUseCase = [
  "Hello",
  "\\HelloWorld",
  `Hello,World\n`,
  new String("Hello World!"),
];

const boolUseCase = [
  true,
  false,
  true && true,
  true || false,
  !false,
  10 >= 20,
  new Boolean(false),
];

const _undefined = undefined;

const bigIntUseCase = [
  BigInt(9007199254740991),
  BigInt("9007199254740991"),
  BigInt("0x1fffffffffffff"),
  BigInt("0b11111111111111111111111111111111111111111111111111111"),
];

const symbolUseCase = [Symbol(), Symbol(200), Symbol("ok")];

const _promise = new Promise((resolve) => resolve("OK"));

const objUseCase = [new Object(), {}, Object.create(null), Object.freeze({})];

const fnUseCase = [
  () => 20,
  function () {
    return "OK";
  },
  new Function(),
];

const regUseCase = [
  //   /^Hello$/,  // tofix
  new RegExp("ab+c", "i"),
  new RegExp(/ab+c/, "i"),
];

describe("测试utils:type getDataType函数", () => {
  it("测试number类型", () => {
    numUseCase.forEach((num) => {
      expect(getDataType(num)).toBe("number");
    });
  });

  it("测试string类型", () => {
    strUseCase.forEach((str) => {
      expect(getDataType(str)).toBe("string");
    });
  });

  it("测试boolean类型", () => {
    boolUseCase.forEach((bool) => {
      expect(getDataType(bool)).toBe("boolean");
    });
  });

  it("测试undefined类型", () => {
    expect(getDataType(_undefined)).toBe("undefined");
  });

  it("测试bigInt类型", () => {
    bigIntUseCase.forEach((bi) => {
      expect(getDataType(bi)).toBe("bigint");
    });
  });

  it("测试symbol类型", () => {
    symbolUseCase.forEach((sym) => {
      expect(getDataType(sym)).toBe("symbol");
    });
  });

  it("测试object类型", () => {
    objUseCase.forEach((obj) => {
      expect(getDataType(obj)).toBe("object");
    });
  });

  it("测试function类型", () => {
    fnUseCase.forEach((fn) => {
      expect(getDataType(fn)).toBe("function");
    });
  });

  it("测试promise类型", () => {
    expect(getDataType(_promise)).toBe("promise");
  });

  // Tofix
  //   it("测试regexp类型", () => {
  //     regUseCase.forEach((reg) => {
  //       expect(reg).toBe("regexp");
  //     });
  //   });
});

describe("测试utils:type isType函数", () => {
  it(`测试isType(number)`, () => {
    const _isNumber = isType("number");
    numUseCase.forEach((num) => {
      expect(_isNumber(num)).toBeTruthy();
    });
  });
  it(`测试isType(boolean)`, () => {
    const _isBool = isType("boolean");
    boolUseCase.forEach((num) => {
      expect(_isBool(num)).toBeTruthy();
    });
  });
  it(`测试isType(string)`, () => {
    const _isStr = isType("string");
    strUseCase.forEach((str) => {
      expect(_isStr(str)).toBeTruthy();
    });
  });
  it(`测试isType(undefined)`, () => {
    const _isUndef = isType("undefined");
    expect(_isUndef(_undefined)).toBeTruthy();
  });
  it(`测试isType(bigint)`, () => {
    const _isBigInt = isType("bigint");
    bigIntUseCase.forEach((bi) => {
      expect(_isBigInt(bi)).toBeTruthy();
    });
  });

  it("测试isType(symbol)", () => {
    const _isSym = isType("symbol");
    symbolUseCase.forEach((sym) => {
      expect(_isSym(sym)).toBeTruthy();
    });
  });

  it("测试object类型", () => {
    const _isObj = isType("object");
    objUseCase.forEach((obj) => {
      expect(_isObj(obj)).toBeTruthy();
    });
  });

  it("测试function类型", () => {
    const _isFn = isType("function");
    fnUseCase.forEach((fn) => {
      expect(_isFn(fn)).toBeTruthy();
    });
  });

  it("测试promise类型", () => {
    const _isPromise = isType("promise");
    expect(_isPromise(_promise)).toBeTruthy();
  });
});
