import CreateAction from "./CreateAction";
import SearchAction from "./SearchAction";
import "./index.scss";

const Actions = () => {
  return (
    <div className="actions">
      <SearchAction />
      <CreateAction />
    </div>
  );
};

export default Actions;
