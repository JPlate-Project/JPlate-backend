import React, { useState, useEffect } from 'react';
import Cart from './Cart'
import ItemDescription from './ItemDescription';

const Plate = (props) => {
  const [showItemDescription, setShowItemDescription] = useState(false)

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

      <button type="button" id="addToCart" onClick={() => {
        return setShowItemDescription(!showItemDescription)
      }}>

        <img src="https://previews.123rf.com/images/aguiters/aguiters1711/aguiters171100033/90038691-shopping-cart-icon-vector.jpg" height="20px" width="20px" />
      </button>

      {`$${props.currentPlate.price}`}

    </div>
  )
}


export default Plate;
