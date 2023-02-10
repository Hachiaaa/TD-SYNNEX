import Actions from "../Actions";
import "./index.scss";

const ListHeader = () => {
  return (
    <div className="header">
      <span>SDK Management</span>
      <Actions />
    </div>
  );
};

export default ListHeader;
