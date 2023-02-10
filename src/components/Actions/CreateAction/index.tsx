import { ReactComponent as AddIcon } from "@assets/ESM@iconset_New.svg";
import "./index.scss";

const CreateAction = () => {
  return (
    <div className="button">
      <AddIcon className="button-icon" />
      <span className="button-label">Create SDK</span>
    </div>
  );
};

export default CreateAction;
