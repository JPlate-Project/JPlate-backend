import React from 'react';
import QuantityCalc from './QuantityCalc';

const ItemDescription = (props) => {

  return (
    < div id="itemDescriptionContainer" >
      <div id="itemDescriptionHeader">
        {props.currentPlate.name}
      </div>
      <hr />
      <div id="itemDescriptionBody">
        <div id="itemDescriptionCenter">
          <img src={props.currentPlate.imageURL}></img>
          <div id="itemDescriptionCenterQuantity">
            <QuantityCalc
              handleQuantityClick={props.handleQuantityClick}
              quantity={props.quantity}
            />
            <div id="addToCart">
              <button id="addToCart" type="button"
                onClick={() => { return props.handleAddToCart(props.currentPlate, props.quantity); }}>Add to cart
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
