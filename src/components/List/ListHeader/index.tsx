import Actions from "../../Actions";
import "./index.scss";

const ListHeader = () => {
  return (
    <div className="header">
      <div className="header-title">SDK Management</div>
      <Actions />
    </div>
  );
};

export default ListHeader;
