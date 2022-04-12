import { List } from "../../components";
import { MockData } from "./constant";
import type { RowType } from "./types";

const Row = (props: RowType) => {
  const { name, id } = props;
  return (
    <div>
      <div>Id:{id}</div>
      <div>Name:{name}</div>
    </div>
  );
};

const ListPage = () => {
  return (
    <div>
      <List<RowType>
        data={MockData}
        rowRender={(item: RowType) => <Row {...item} />}
      />
    </div>
  );
};

export default ListPage;
