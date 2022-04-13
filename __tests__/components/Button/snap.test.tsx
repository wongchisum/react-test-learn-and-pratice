import renderer from "react-test-renderer";
import { Button } from "../../../src/components";

// 进行快照测试，会生成__snapshots__文件夹和.snap文件
// 描述测试用例渲染json结果
// 如果snap结果发生变动，可能是组件变动导致的bug，会导致报错
// 如果是组件的内部需要变动，可以使用npx jest -u进行快照的刷新

const Text = () => {
  return <div>Hello World</div>;
};

describe("测试Button组件props", () => {
  it("default", () => {
    const view = renderer.create(<Button></Button>).toJSON();
    expect(view).toMatchSnapshot();
  });

  it("With children props", () => {
    const textView = renderer.create(<Button>Text</Button>).toJSON();
    expect(textView).toMatchSnapshot();

    const elementView = renderer
      .create(
        <Button>
          <div className="element">Hello</div>
        </Button>
      )
      .toJSON();
    expect(elementView).toMatchSnapshot();

    const fcView = renderer
      .create(
        <Button>
          <Text />
        </Button>
      )
      .toJSON();
    expect(fcView).toMatchSnapshot();
  });

  it("With theme props", () => {
    const dangerView = renderer
      .create(<Button theme="danger">danger</Button>)
      .toJSON();
    expect(dangerView).toMatchSnapshot();

    const infoView = renderer
      .create(<Button theme="info">info</Button>)
      .toJSON();
    expect(infoView).toMatchSnapshot();

    const primaryView = renderer
      .create(<Button theme="primary">primary</Button>)
      .toJSON();
    expect(primaryView).toMatchSnapshot();
  });
  it("With layout props", () => {
    const inlineView = renderer
      .create(<Button layout="inline-block">inline-block</Button>)
      .toJSON();
    expect(inlineView).toMatchSnapshot();

    const blockView = renderer
      .create(<Button layout="block">block</Button>)
      .toJSON();
    expect(blockView).toMatchSnapshot();
  });
});
