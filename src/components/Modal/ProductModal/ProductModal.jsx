import { useState } from "react";
import "./ProductModalStyle.css";
import { Portal } from "react-portal";
import ModalCloseBtn from "../ModalCloseBtn/ModalCloseBtn";
import DropDownBox from "../DropDownBox/DropDownBox";
import backerData from "../../../data/backerData.json";

const ProductModal = () => {
  const [productData, setProductData] = useState(backerData);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectAmount, setSelectAmount] = useState(0);
  console.log(`typeOf:`, typeof selectAmount);

  const handleSelectedItem = (productName) => {
    // productName is a parameter for the product.name coming from the input field.
    setSelectedItem(productName);
  };

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
                    className={`modal-details-outer-container ${
                      selectedItem === product.name ? "selected" : ""
                    }`}
                    key={product.id}
                  >
                    <div className="modal-details-inner-container">
                      <input
                        className="radio-btn"
                        type="radio" // set the type of the input field to a radio btn
                        name="backer" // Give all the radio btn in this group the same name. This tells the browser that these radio buttons belong to the same group and only one at a time can be selected.
                        value={product.name} // Set the value of the radio btn to the name of the json file
                        onChange={() => handleSelectedItem(product.name)} // on selecting a radio btn run the function and pass as a parameter the product.name to it. It is a anonymous function otherwise the handleSelectedItem() will be called immediately.
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

                    {/*if the selected item is equal to the selected product.name than show the dropdownbox component else show nothing */}
                    {selectedItem === product.name ? (
                      <DropDownBox
                        selectAmount={selectAmount}
                        setSelectAmount={setSelectAmount}
                      />
                    ) : null}
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
