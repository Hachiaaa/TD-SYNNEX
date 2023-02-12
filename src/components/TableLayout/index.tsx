import Tabs from "../Tabs";
import SDKList from "../List";
import "./index.scss";

const TableLayout = () => {
  return (
    <div className="container">
      <aside className="sdk-tabs">
        <Tabs />
      </aside>
      <div className="sdk-list">
        <SDKList />
      </div>
    </div>
  );
};

export default TableLayout;
