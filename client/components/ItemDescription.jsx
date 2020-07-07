import React from 'react';
import QuantityCalc from './QuantityCalc';

const ItemDescription = (props) => {
  return (
    <div id="itemDescriptionContainer">
      <div id="itemDescriptionHeader">
        {props.currentPlate.name}
        <button type="button" onClick={() => {
          return props.toggleItemDescription(!props.showItemDescription);
        }}>
          <img src="https://static.thenounproject.com/png/1600389-200.png" style={{ height: '20px', width: '20px', 'backgroundColor': 'white', border: 'none' }} ></img>
        </button>
      </div>
      <hr />
      <div id="itemDescriptionBody">
        <div id="itemDescriptionCenter">
          <img src={props.currentPlate.imageURL} height="300px"
            width="300px"></img>
          <div id="itemDescriptionCenterQuantity">
            <QuantityCalc currentPrice={props.currentPlate.price} />
            <div id="addToCart">
              <button id="addToCart" type="button">Add to cart</button>
            </div>
          </div>
        </div>
        <div>{props.currentPlate.description}</div>
      </div>
    </div >
  );
};

export default ItemDescription;
