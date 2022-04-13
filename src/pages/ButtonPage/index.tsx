import { Button } from "../../components";

const ButtonPage = () => {
  const handleClick = (event) => {
    console.log("event", event);
    console.log("click trigger");
  };
  return (
    <div>
      <div>Button组件示例</div>
      <div>配色展示</div>
      <div>
        <Button>常规按钮</Button>
      </div>
      <div>
        <Button theme="primary">高亮按钮</Button>
      </div>
      <div>
        <Button theme="danger">警告按钮</Button>
      </div>
      <div>
        <Button theme="info">信息按钮</Button>
      </div>
      <div>尺寸展示</div>
      <div>
        <Button size="lg" theme="primary">
          lg
        </Button>
      </div>
      <div>
        <Button size="md" theme="primary">
          md
        </Button>
      </div>
      <div>
        <Button size="sm" theme="primary">
          sm
        </Button>
      </div>
      <div>布局展示</div>
      <div>
        <Button>行内按钮</Button>
      </div>
      <div>
        <Button layout="block">块状按钮</Button>
      </div>
      <div>
        <div>事件点击</div>
        <Button theme="primary" size="lg" onClick={handleClick}>
          点击触发事件
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
