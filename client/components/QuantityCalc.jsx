import React, { useState } from 'react';
import setItemQuantity from '../utils/utilsFunctions';


const QuantityCalc = () => {
  const [quantity, setQuantity] = useState(1);

  function handleClick(mathOperation) {

    setQuantity(setItemQuantity(quantity, mathOperation));
  }

  return (
    <>
      <button
        id="minus"
        type="button"
        onClick={() => { handleClick('minus') }}>
        -
      </button>
      {quantity}
      <button
        id="add"
        type="button"
        onClick={() => { handleClick('add') }}>
        +
      </button>

    </>
  );
};

export default QuantityCalc;
