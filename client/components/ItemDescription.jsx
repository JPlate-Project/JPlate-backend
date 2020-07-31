import React, { useState } from 'react';
import QuantityCalc from './QuantityCalc';

const ItemDescription = (props) => {
  const [amount, setAmount] = useState(props.quantity);

  function handleChange(num) {
    setAmount(num);
  }

  return (
    <div id="itemDescriptionContainer" >
      <div id="itemDescriptionHeader">
        {props.currentPlate.name}
      </div>
      <hr />
      <div id="itemDescriptionBody">
        <div id="itemDescriptionCenter">
          <img src={props.currentPlate.imageURL} />
          <div id="itemDescriptionCenterQuantity">
            <QuantityCalc
              quantity={amount}
              onChange={handleChange}
            />
            <div id="addToCart">
              <button
                id="addToCart"
                type="button"
                onClick={() => {
                  return props.handleAddToCart(props.currentPlate, amount);
                }}>Add to cart
              </button>
            </div>
          </div>
        </div>
        <div>{props.currentPlate.description}</div>
      </div>
    </div >
  );
};

export default ItemDescription;
