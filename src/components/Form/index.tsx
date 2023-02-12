import { useForm } from "react-hook-form";
import { ReactComponent as InfoIcon } from "@/assets/ESM@iconset_info2.svg";
import useListContext from "hooks/useListContext";
import { nanoid } from "nanoid";
import "./index.scss";

import type { ISdkInfo } from "hooks/useMockApi";

type FormValue = Pick<ISdkInfo, "clientName" | "boardName" | "requestor"> & {
  tags?: string;
};

interface FormProps {
  editId: string;
}

const Form = (props: FormProps) => {
  const { editId } = props;
  const { addNewSdk, sdkList, updateSdk, setShowModal } = useListContext();
  const currentSdk = sdkList?.find((sdk) => sdk.id === editId);
  const defaultValues = editId
    ? {
        clientName: currentSdk?.clientName,
        boardName: currentSdk?.boardName,
        tags: currentSdk?.tags.join(","),
        requestor: currentSdk?.requestor,
      }
    : {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues,
  });
  const onSubmit = () => {
    const onSuccess = (value: FormValue) => {
      const tags = value.tags ? value.tags.split(",") : [];
      const id = nanoid(4);
      if (editId) {
        updateSdk?.(editId, {
          ...value,
          tags,
          includeBySearch: true,
          id: editId,
        });
      } else {
        addNewSdk?.({
          ...value,
          tags,
          includeBySearch: true,
          id,
        });
      }
      setShowModal?.(false);
    };
    handleSubmit(onSuccess, (e) => {
      console.error("submit error", e);
    })();
  };
  return (
    <div className="form-container">
      <div className="form-body">
        <div className="label">
          <span className="required">*</span>Client name:{" "}
          {errors.clientName?.type === "required" && (
            <p className="error-info" role="alert">
              Client name is required
            </p>
          )}
        </div>
        <input
          className="input"
          type="text"
          {...register("clientName", { required: true })}
        />

        <div className="label">
          <span className="required">*</span>Board name:{" "}
          {errors.boardName?.type === "required" && (
            <p className="error-info" role="alert">
              Board name is required
            </p>
          )}
        </div>
        <input
          className="input"
          type="text"
          {...register("boardName", { required: true })}
        />

        <div className="label" title="Tags split with comma, egs: story,book">
          Tags
          <InfoIcon className="info-icon" />:
        </div>
        <input className="input" type="text" {...register("tags")} />
        <div className="label">
          <span className="required">*</span>Requestor:{" "}
          {errors.requestor?.type === "required" && (
            <p className="error-info" role="alert">
              Requestor is required
            </p>
          )}
        </div>
        <input
          className="input"
          type="text"
          {...register("requestor", { required: true })}
        />
      </div>
      <div className="form-footer">
        <button className="button-cancel">Cancel</button>
        <button className="button-confirm" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
