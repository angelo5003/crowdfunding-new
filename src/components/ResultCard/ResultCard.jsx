import ProgressBar from "../ProgressBar/ProgressBar";
import "./ResultCardStyle.css";

const ResultCard = () => {
  return (
    <div className="resultcard-outer-container">
      <article className="resultcard-container">
        <div className="resultcard-results">
          <h2 className="resultcard-title">$89,914</h2>
          <p className="resultcard-info">of $100,000 backed</p>
        </div>
        <hr className="resultcard-vertical-line" />
        <div className="resultcard-results">
          <h2 className="resultcard-result-title">5,007</h2>
          <p className="resultcard-result-info">total backers</p>
        </div>
        <hr className="resultcard-vertical-line" />
        <div className="resultcard-results">
          <h2 className="resultcard-title">56</h2>
          <p className="resultcard-info">days left</p>
        </div>
      </article>
      <ProgressBar />
    </div>
  );
};

export default ResultCard;
