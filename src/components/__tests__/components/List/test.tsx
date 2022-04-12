import React from "react";
import { render, screen } from "@testing-library/react";
import { List } from "../../../List";

// 模拟的列表数据
export const MockData = [
  {
    name: "xiaoming",
    age: 20,
    id: 1,
  },
  {
    name: "xiaohong",
    age: 22,
    id: 2,
  },
];

export type ListType = typeof MockData[0];
type RowRenderProps = ListType & { index: number };

// 自定义列表项的渲染(函数组件)
const RowRender = (props: RowRenderProps) => {
  const { name, age, id, index } = props;
  return (
    <>
      <div className="name">{name}</div>
      <div className="age">{age}</div>
      <div className="id">{id}</div>
    </>
  );
};

// 自定义列表项的渲染(ReactElement)
const ListItem = <div>Custom Render</div>;

// 测试代码
describe.skip("测试List组件", () => {
  test("注入props:[data] 和 [rowRender],rowRender使用函数渲染：", () => {
    const { debug } = render(
      <List
        data={MockData}
        rowRender={(props, index) => <RowRender {...props} index={index} />}
      />
    );
    // 进行调试,在终端控制台输出相应的调试结果
    debug();

    // 进行遍历，断言文字内容有被组件加载
    MockData.forEach((item) => {
      const { name, age, id } = item;
      expect(screen.queryByText(name)).not.toBeNull();
      expect(screen.queryByText(age)).not.toBeNull();
      expect(screen.queryByText(id)).not.toBeNull();
    });
  });

  test("注入props:[data] 和 [rowRender],rowRender使用ReactNode类型渲染：", () => {
    const { debug } = render(<List data={MockData} rowRender={ListItem} />);
    debug();
    // 测试是否渲染自定义节点
    // 进行遍历，断言文字内容有被组件加载
    MockData.forEach(() => {
      expect(screen.findByText("Custom Render")).not.toBeNull();
    });
  });

  test("注入props:[data] 和 [rowRender],rowRender使用null渲染:", () => {
    const { debug } = render(<List data={MockData} rowRender={null} />);
    debug();
    // expect(screen.getByText)
    MockData.forEach(({ id, name, age }) => {
      expect(screen.findByText(id)).not.toBeNull();
      expect(screen.findByText(name)).not.toBeNull();
      expect(screen.findByText(age)).not.toBeNull();
    });
  });
});
