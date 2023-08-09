import { useContext } from "react";
import "./ModalCloseBtnStyles.css";
import { MdClose } from "react-icons/md";
import { ModalContext } from "../../Cards/PledgeCard/PledgeCard";

const ModalCloseBtn = () => {
  const handleModal = useContext(ModalContext);

  return (
    <div className="modal-close-btn-container">
      <button className="modal-close-btn" onClick={handleModal}>
        <MdClose className="modal-close-btn-icon" />
      </button>
    </div>
  );
};

export default ModalCloseBtn;
