import { useState } from "react";
import "./DropDownBoxStyle.css";
import { LiaDollarSignSolid } from "react-icons/lia";
import SuccesModal from "../SuccesModal/SuccesModal";

const DropDownBox = () => {
  const [succesModal, setSuccessModal] = useState(false);
  const handleSuccesModal = () => {
    setSuccessModal(!succesModal);
  };
  return (
    <section className="dropdown-pledge-outer-container">
      <hr className="dropdown-pledge-hr-line" />
      <div className="dropdown-pledge-inner-container">
        <p className="dropdown-pledge-title">Enter your pledge</p>
        <div className="dropdown-pledge-controls">
          <form className="dropdown-pledge-input-container">
            <LiaDollarSignSolid className="dropdown-pledge-dollar-sign" />
            <input type="text" className="dropdown-pledge-input" />
          </form>
          <button className="dropdown-pledge-btn" onClick={handleSuccesModal}>
            Continue
          </button>
        </div>
      </div>
      {succesModal ? <SuccesModal /> : null}
    </section>
  );
};

export default DropDownBox;
