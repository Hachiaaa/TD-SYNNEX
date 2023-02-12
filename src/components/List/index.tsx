import { useState } from "react";
import ListHeader from "./ListHeader";
import useMockApi from "hooks/useMockApi";
import { ReactComponent as EditIcon } from "@/assets/ESM@iconset_Edit.svg";
import { ReactComponent as DeleteIcon } from "@/assets/ESM@iconset_Delete.svg";
import Modal from "components/Modal";
import ListContext from "context/ListContext";
import Form from "components/Form";
import "./index.scss";

const List = () => {
  const { sdkList, addNewSdk, updateSdk, removeSdk, searchSdk } = useMockApi();
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState("");
  const onModalClose = () => {
    setShowModal(false);
    setEditId("");
  };
  const editSdk = (id: string) => {
    setEditId(id);
    setShowModal(true);
  };
  return (
    <ListContext.Provider
      value={{
        setShowModal,
        addNewSdk,
        updateSdk,
        searchSdk,
        sdkList,
      }}
    >
      <ListHeader></ListHeader>
      {showModal && (
        <Modal onClose={onModalClose}>
          <Form editId={editId} />
        </Modal>
      )}
      <div className="table-header">
        <div className="header-client">Client name</div>
        <div className="header-board">Board name</div>
        <div className="header-tags">Tags</div>
        <div className="header-requestor">Requestor</div>
        <div className="header-sdk">SDK script</div>
        <div className="header-actions">Actions</div>
      </div>
      <div className="table-content">
        {sdkList.map((sdkInfo) => {
          return (
            sdkInfo.includeBySearch && (
              <div className="table-item" key={sdkInfo.id}>
                <div className="table-item__client">{sdkInfo.clientName}</div>
                <div className="table-item__board">{sdkInfo.boardName}</div>
                <div className="table-item__tags">
                  {sdkInfo.tags.map((tag) => {
                    return (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <div className="table-item__requestor">{sdkInfo.requestor}</div>
                <div className="table-item__sdk">{"</> SDK"}</div>
                <div className="table-item__actions">
                  <EditIcon
                    onClick={() => editSdk(sdkInfo.id)}
                    className="action-icon"
                  />
                  <DeleteIcon
                    onClick={() => removeSdk(sdkInfo.id)}
                    className="action-icon"
                  />
                </div>
              </div>
            )
          );
        })}
      </div>
    </ListContext.Provider>
  );
};

export default List;
