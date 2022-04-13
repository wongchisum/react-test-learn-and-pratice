import { renderHook, act } from "@testing-library/react-hooks";
import { useBool } from "../../../src/hooks";

describe("测试useCounter", () => {
  it("测试不符合预期的入参", () => {
    const { result } = renderHook(() => useBool(null));
    // result.current实际上是本次运行hook的返回值
    const [bool] = result.current;
    expect(bool).toBe(false);
  });

  it("测试符合预期的入参", () => {
    const { result } = renderHook(() => useBool(true));
    const [bool] = result.current;
    expect(bool).toBe(true);
  });

  it("测试回调函数", () => {
    const { result } = renderHook(() => useBool(false));
    const [bool, { toggle, setTrue, setFalse }] = result.current;
    expect(bool).toBe(false);

    // 切换为true
    act(() => {
      setTrue();
    });

    expect(result.current[0]).toBe(true);

    // 切换为false
    act(() => {
      setFalse();
    });

    expect(result.current[0]).toBe(false);

    // 切换状态
    act(() => {
      toggle();
    });

    expect(result.current[0]).toBe(true);
  });
});
