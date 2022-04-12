import type { ListProps } from "./types";
import { execRender } from "./helper";

export function List<T>(props: ListProps<T>) {
  const { data, rowRender } = props;
  if (Array.isArray(data)) {
    return (
      <div>
        {data.map((item: T, index: number) => {
          const element = execRender(rowRender, item, index);
          return element && <div key={index}>{element}</div>;
        })}
      </div>
    );
  }
  return null;
}
