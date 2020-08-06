import React, { useState } from 'react';
import ItemDescription from './ItemDescription';

const Plate = (props) => {
  const [showItemDescription, setShowItemDescription] = useState(false);

  return (
    <div className="singlePlate">
      {showItemDescription ?
        <ItemDescription
          currentCart={props.currentCart}
          handleAddToCart={props.handleAddToCart}
          currentPlate={props.currentPlate}
          toggleItemDescription={setShowItemDescription}
          showItemDescription={showItemDescription}
          quantity={props.quantity}
        />
        : ''}
      <img src={props.currentPlate.imageURL} alt="cannot display" />
      <br />
      <h4>{props.currentPlate.name}</h4>
      <hr />
      {props.currentPlate.description}
      <br />
      <button
        type="button"
        onClick={() => {
          return setShowItemDescription(!showItemDescription);
        }}>
        <img id="cartButton" src="https://image.flaticon.com/icons/svg/25/25619.svg" />
      </button>
      {`$${props.currentPlate.price}`}
    </div>
  );
};

export default Plate;
