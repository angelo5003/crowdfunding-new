import { useContext } from "react";
import "./SuccesModalStyle.css";
import { Portal } from "react-portal";
import SuccesLogo from "../../../assets/images/icon-check.svg";
import { ModalContext } from "../../Cards/PledgeCard/PledgeCard";

const SuccesModal = () => {
  const handleModal = useContext(ModalContext);
  return (
    <>
      <Portal>
        <div className="succes-modal-background">
          <div className="succes-modal-outer-container">
            <img
              src={SuccesLogo}
              alt="succes-logo"
              className="succes-modal-logo"
            />
            <h2 className="succes-modal-title">Thanks for your support</h2>
            <p className="succes-modal-message">
              Thanks for your support! Your pledge brings us one step closer to
              sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
              an email once our campaign is completed.
            </p>
            <button className="succes-modal-btn" onClick={handleModal}>
              Got It!
            </button>
          </div>
        </div>
      </Portal>
    </>
  );
};

export default SuccesModal;
