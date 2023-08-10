import { useState } from "react";
import "./DropDownBoxStyle.css";
import { LiaDollarSignSolid } from "react-icons/lia";
import { AmountPropType } from "../../../utils/PropTypes";
import SuccesModal from "../SuccesModal/SuccesModal";

const DropDownBox = ({ selectAmount, setSelectAmount }) => {
  const [succesModal, setSuccessModal] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setSelectAmount(Number(e.target.value)); // set the value from the input field to a number
  };

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
            <input
              type="text"
              value={selectAmount}
              className="dropdown-pledge-input"
              onChange={handleChange}
            />
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

DropDownBox.propTypes = AmountPropType;

export default DropDownBox;
