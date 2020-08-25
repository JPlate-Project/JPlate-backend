import React, { useState } from 'react';
import QuantityCalc from './QuantityCalc';
import { addToCart } from '../utils/utilsFunctions';

const ItemDescription = (props) => {

  const [amount, setAmount] = useState(1);

  let buttonDisabled = false;
  if (props.plate.quantity <= 0) {
    buttonDisabled = true;
  }

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
                className={buttonDisabled === true ? 'buttonDisabled' : 'addToCart'}
                type="button"
                disabled={buttonDisabled}
                onClick={() => {
                  const newCart = addToCart(props.cart, props.plate, amount);
                  props.handleSetCart(newCart);
                }}>
                {buttonDisabled === true ? 'Sold out' : 'Add to cart'}
              </button>
            </div>
            {
              props.plate.quantity > 0 ?
                `Only ${props.plate.quantity} left!` :
                ''
            }
          </div>
        </div>
        <div>{props.plate.description}</div>
      </div>
    </div >
  );
};

export default ItemDescription;
