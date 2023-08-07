import { useState } from "react";
import "./ProductTitleCardStyles.css";
import BrandLogo from "../../assets/images/logo-mastercraft.svg";
import BookMarkIcon from "../../assets/images/icon-bookmark.svg";
import BookMarkIconChecked from "../../assets/images/icon-bookmarked-marked.svg";

const ProductTitleCard = () => {
  const [bookMarked, setBookMarked] = useState(false);
  const handleBookMarkClick = () => {
    setBookMarked(!bookMarked);
  };
  return (
    <>
      <section className="product-title-card-inner-container">
        <img src={BrandLogo} alt="product-logo" className="brand-logo-img" />
        <div className="product-title-container">
          <h2 className="product-title">Mastercraft Bamboo Monitor Riser</h2>
          <p className="product-info">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
        </div>
        <div className="product-btn-container">
          <button className="green-btn" onClick={handleBookMarkClick}>
            Back this project
          </button>
          <div className="bookmark-icon-container">
            <img
              src={bookMarked ? BookMarkIconChecked : BookMarkIcon}
              alt="bookmark"
              className="bookmark-icon"
            />{" "}
            <div
              className={
                bookMarked
                  ? "bookmark-btn-text-container-booked"
                  : "bookmark-btn-text-container"
              }
            >
              <p>{bookMarked ? "Bookmarked" : "Bookmark"}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductTitleCard;
