import { useState } from "react";
import "./ProductModalStyle.css";
import { Portal } from "react-portal";
import ModalCloseBtn from "../ModalCloseBtn/ModalCloseBtn";
import backerData from "../../../data/backerData.json";

const ProductModal = () => {
  const [productData, setProductData] = useState(backerData);

  return (
    <>
      <Portal>
        <div className="modal-background-container">
          <section className="modal-outer-container">
            <ModalCloseBtn />
            <h3 className="modal-title">Back this project</h3>
            <p className="modal-intro-text">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser to
              the world?
            </p>
            {Array.isArray(productData) &&
              productData.map((product) => {
                return (
                  <div
                    className="modal-details-outer-container"
                    key={product.id}
                  >
                    <div className="modal-details-inner-container">
                      <input
                        className="radio-btn"
                        type="radio" // set the type of the input field to a radio btn
                      />
                      <h3 className="modal-detail-title">
                        {product.backerTitle}
                      </h3>
                      <h3 className="modal-detail-title">
                        Pledge ${product.backerPledge} or more
                      </h3>
                      <p className="modal-details-left-numbers">
                        {product.backerLeft}
                        <span className="modal-details-left"> left</span>
                      </p>
                    </div>
                    <p className="modal-details-text">{product.backerText}</p>
                  </div>
                );
              })}
          </section>
        </div>
      </Portal>
    </>
  );
};

export default ProductModal;
