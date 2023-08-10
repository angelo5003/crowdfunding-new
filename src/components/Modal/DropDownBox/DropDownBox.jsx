import "./DropDownBoxStyle.css";
import { LiaDollarSignSolid } from "react-icons/lia";

const DropDownBox = () => {
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
          <button className="dropdown-pledge-btn">Continue</button>
        </div>
      </div>
    </section>
  );
};

export default DropDownBox;
