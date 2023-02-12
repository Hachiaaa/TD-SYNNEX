import { ReactComponent as AddIcon } from "@/assets/ESM@iconset_New.svg";
import useListContext from "hooks/useListContext";
import "./index.scss";

const CreateAction = () => {
  const { setShowModal } = useListContext();
  return (
    <div
      className="button"
      onClick={() => {
        setShowModal?.(true);
      }}
    >
      <AddIcon className="button-icon" />
      <span className="button-label">Create SDK</span>
    </div>
  );
};

export default CreateAction;
