import "./ProgressBarStyle.css";

const ProgressBar = () => {
  return (
    <div className="progressbar-outer-container">
      <div className="progressbar-inner-container">
        <span className="progress-percentage">60%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
