import Tabs from "../Tabs";
import ListHeader from "../ListHeader";
import "./index.scss";

const TableLayout = () => {
  return (
    <div className="container">
      <aside className="sdk-tabs">
        <Tabs />
      </aside>
      <div className="sdk-list">
        <ListHeader />
      </div>
    </div>
  );
};

export default TableLayout;
