import React, { useState } from 'react';
import ItemDescription from './ItemDescription';

const Plate = (props) => {
  const [showItemDescription, setShowItemDescription] = useState(false);

  return (
    <div className="singlePlate">
      {showItemDescription ? <ItemDescription currentPlate={props.currentPlate} toggleItemDescription={setShowItemDescription} showItemDescription={showItemDescription} /> : ''}

      <img
        src={props.currentPlate.imageURL}
        alt="cannot display"
        height="200px"
        width="200px"
      />
      <br />

      <h4>  {props.currentPlate.name}</h4>
      <hr />
      {props.currentPlate.description}
      <br />

      <button
        type="button" id="addToCart" onClick={() => {
          return setShowItemDescription(!showItemDescription);
        }}>

        <img
          id="cartButton" src="https://image.flaticon.com/icons/svg/25/25619.svg" height="20px" width="20px" />
      </button>

      {`$${props.currentPlate.price}`}

    </div>
  );
};


export default Plate;
