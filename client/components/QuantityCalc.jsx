import React, { useState } from 'react';
import { setItemQuantity } from '../utils/utilsFunctions';

const QuantityCalc = (props) => {
  const [quantity, setQuantity] = useState(1);

  function handleClick(mathOperation) {
    setQuantity(setItemQuantity(quantity, mathOperation));
  }

  return (
    <>
      $ {props.currentPrice * quantity}
      <button
        id="minus"
        type="button"
        style={{ height: '30px', width: '30px' }}
        onClick={() => { handleClick('minus') }}>
        -
      </button>
      {quantity}
      <button
        id="add"
        type="button"
        style={{ height: '30px', width: '30px' }}
        onClick={() => { handleClick('add') }}>
        +
      </button>

    </>
  );
};

export default QuantityCalc;
