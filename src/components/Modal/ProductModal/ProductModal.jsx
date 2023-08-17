import { useState } from "react";
import "./ProductModalStyle.css";
import { Portal } from "react-portal";
import ModalCloseBtn from "../ModalCloseBtn/ModalCloseBtn";
import DropDownBox from "../DropDownBox/DropDownBox";
import backerData from "../../../data/backerData.json";

const ProductModal = () => {
  const [productData, setProductData] = useState(backerData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectAmount, setSelectAmount] = useState(0);

  const handleSelectedItem = (productName) => {
    // productName is a parameter for the product.name coming from the input field.
    setSelectedItem(productName);
  };

  console.log(`productData:`, productData);

  // This function ensures that the selected input field's value is subtracted from the array.
  const handleProductAmount = () => {
    // add selectedItem to the if state to make sure that we only change the value of the selected input field where in. Check if a selectedItem is present to avoid unintended changes.
    if (selectedItem) {
      // create a variable and map over the productData array state
      const updatedProductData = productData.map((product) => {
        // While mapping, check if the current product's name matches the selectedItem input field
        if (product.name === selectedItem) {
          // If it's the selected item, update the backerLeft value by subtracting selectAmount.
          return {
            ...product,
            backerLeft: product.backerLeft - selectAmount,
          };
        }
        // For other items, keep the product object unchanged.
        return product;
      });
      // Update the productData state with the new array to reflect the changes in the UI.
      setProductData(updatedProductData);
      console.log(`updated:`, updatedProductData);
    }
    // reset the value of the input field to 0 again
    setSelectAmount(0);
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
                        handleProductAmount={handleProductAmount}
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
