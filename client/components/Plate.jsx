import React, { useState } from 'react';
import ItemDescription from './ItemDescription';

const Plate = (props) => {
  const [showItemDescription, setShowItemDescription] = useState(false);

  return (
    <div className="singlePlate">
      {showItemDescription ?
        <ItemDescription
          cart={props.cart}
          handleSetCart={props.handleSetCart}
          plate={props.plate}
          toggleItemDescription={setShowItemDescription}
          showItemDescription={showItemDescription}
        />
        : ''}
      <img src={props.plate.imageURL} alt="cannot display" />
      <br />
      <h4>{props.plate.name}</h4>
      <hr />
      {props.plate.description}
      <br />
      <button
        type="button"
        onClick={() => {
          return setShowItemDescription(!showItemDescription);
        }}>
        <img id="cartButton" src="https://image.flaticon.com/icons/svg/25/25619.svg" />
      </button>
      {`$${props.plate.price}`}
    </div>
  );
};

export default Plate;
