import React, { useState, useEffect } from 'react';
import { calculate } from '../utils/utilsFunctions';

const QuantityCalc = (props) => {

  let amount = props.quantity;
  let setAmount = props.onChange;

  return (
    <div id="quantityCalc">
      {amount}
      <div className="quantityBtn">
        <button
          id="add"
          type="button"
          onClick={() => {
            setAmount(calculate(amount, 'add'));
          }}>+
        </button>
        <button
          id="minus"
          type="button"
          onClick={() => {
            setAmount(calculate(amount, 'minus'));
          }}>-
        </button>
      </div>
    </div>
  );
};

export default QuantityCalc;
