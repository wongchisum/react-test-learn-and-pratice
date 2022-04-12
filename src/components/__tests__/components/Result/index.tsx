import React from "react";
import { render, screen } from "@testing-library/react";
import { Result } from "../../../Result";

describe.skip("测试Result组件", () => {
  it("不注入props,测试默认的文案", () => {
    const { debug } = render(<Result />);
    // debug();
    // 不注入默认success为false
    expect(screen.getByText("Fail!")).not.toBeNull();
  });
  it("注入props:[success=false],测试默认文案", () => {
    const { debug } = render(<Result success={false} />);
    // debug();
    expect(screen.getByText("Fail!")).not.toBeNull();
  });

  it("注入props:[success=true],测试默认文案", () => {
    const { debug } = render(<Result success />);
    // debug();
    expect(screen.getByText("Success!")).not.toBeNull();
  });

  it("注入props:[success=true] [successContent 和 failContent 为String],测试成功状态的展示", () => {
    const { debug } = render(
      <Result success successContent="200 OK" failContent="404 Not Found" />
    );
    debug();
    expect(screen.getByText("200 OK")).not.toBeNull();
  });

  it("注入props:[success=true] [successContent 和 failContent 为String],测试成功状态的展示", () => {
    const { debug } = render(
      <Result
        success={false}
        successContent="200 OK"
        failContent="404 Not Found"
      />
    );
    debug();
    expect(screen.getByText("404 Not Found")).not.toBeNull();
  });
});
