import "./PledgeCardStyle.css";
import { PledgeCardPropType } from "../../../utils/PropTypes";

const PledgeCard = ({ info }) => {
  return (
    <>
      <div className="pledgecard-outer-container">
        <article
          className={`${
            info.id === 3
              ? "pledgecard-out-of-stock"
              : "pledgecard-inner-container"
          }`}
        >
          <div className="pledgecard-title-container">
            <h3 className="pledge-product-title">{info.productTitle}</h3>
            <p className="pledgecard-pledge-text">{info.pledge}</p>
          </div>
          <p className="pledgecard-product-description">
            {info.productDescription}
          </p>
          <div className="pledgecard-overview-container">
            <p className="pledgecard-pledge-products-left">
              {info.productsLeft}{" "}
              <span className="pledgecard-left-text">left</span>
            </p>
            <button className="pledgecard-btn" disabled={info.id === 3}>
              {info.productButton}
            </button>
          </div>
        </article>
      </div>
    </>
  );
};

PledgeCard.propTypes = PledgeCardPropType;

export default PledgeCard;
