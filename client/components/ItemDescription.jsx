import React, { useState } from 'react';
import QuantityCalc from './QuantityCalc';
import { addToCart } from '../utils/utilsFunctions';

const ItemDescription = (props) => {
  const [amount, setAmount] = useState(1);

  function handleChange(num) {
    setAmount(num);
  }

  return (
    <div id="itemDescriptionContainer" >
      <div id="itemDescriptionHeader">
        {props.plate.name}
      </div>
      <hr />
      <div id="itemDescriptionBody">
        <div id="itemDescriptionCenter">
          <img src={props.plate.imageURL} />
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
                  const newCart = addToCart(props.cart, props.plate, amount);
                  props.handleSetCart(newCart);
                }}>Add to cart
              </button>
            </div>
          </div>
        </div>
        <div>{props.plate.description}</div>
      </div>
    </div >
  );
};

export default ItemDescription;
