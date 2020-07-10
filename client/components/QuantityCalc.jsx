import React from 'react';

const QuantityCalc = (props) => {



  return (
    <>
      $ {props.currentPrice * props.quantity}
      <button
        id="minus"
        type="button"
        style={{ height: '30px', width: '30px' }}
        onClick={() => { props.handleClick('minus') }}>
        -
      </button>
      {props.quantity}
      <button
        id="add"
        type="button"
        style={{ height: '30px', width: '30px' }}
        onClick={() => { props.handleClick('add') }}>
        +
      </button>

    </>
  );
};

export default QuantityCalc;
