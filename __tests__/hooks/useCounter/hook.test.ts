import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../../src/hooks";

describe("测试useCounter", () => {
  it("测试不符合预期的入参", () => {
    const { result } = renderHook(() => useCounter(3.14));
    // result.current实际上是本次运行hook的返回值
    const [count] = result.current;
    expect(count).toBe(0);
  });
  it("测试符合预期的入参", () => {
    const { result } = renderHook(() => useCounter(10));
    // result.current实际上是本次运行hook的返回值
    const [count] = result.current;
    expect(count).toBe(10);
  });

  it("测试回调函数", () => {
    const { result } = renderHook(() => useCounter(0));
    const [count, { inc, dec, reset }] = result.current;

    // 自增
    act(() => {
      inc();
    });

    // expect(count).toBe(1); 这边不能这样写，否则无法拿到每次最新的状态
    expect(result.current[0]).toBe(1);

    // 再次自增
    act(() => {
      inc();
    });
    expect(result.current[0]).toBe(2);

    // 重置
    act(() => {
      reset();
    });
    expect(result.current[0]).toBe(0);

    // 自减
    act(() => {
      dec();
    });
    expect(result.current[0]).toBe(-1);

    // 再次自减
    act(() => {
      dec();
    });
    expect(result.current[0]).toBe(-2);
  });
});
