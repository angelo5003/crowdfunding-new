import { useContext } from "react";
import "./ModalCloseBtnStyles.css";
import { MdClose } from "react-icons/md";
import { ModalContext } from "../../Cards/PledgeCard/PledgeCard";

const ModalCloseBtn = () => {
  const closeModal = useContext(ModalContext);

  return (
    <div className="modal-close-btn-container">
      <button className="modal-close-btn" onClick={closeModal}>
        <MdClose className="modal-close-btn-icon" />
      </button>
    </div>
  );
};

export default ModalCloseBtn;
