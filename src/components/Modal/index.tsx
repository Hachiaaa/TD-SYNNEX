import "./index.scss";

import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = (props: ModalProps) => {
  const { onClose, children } = props;
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <span>Create SDK</span>
          <div className="modal-close" onClick={onClose}>
            x
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
