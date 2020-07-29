import React from 'react';

const QuantityCalc = (props) => {

  return (
    <div id="quantityCalc">
      {props.quantity}
      <div className="quantityBtn">
        <button
          id="add"
          type="button"
          onClick={() => {
            props.handleQuantityClick('add');
          }}>+
          </button>
        <button
          id="minus"
          type="button"
          onClick={() => {
            props.handleQuantityClick('minus');
          }}>-
        </button>
      </div>
    </div>
  );
};

export default QuantityCalc;
