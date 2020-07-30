import React, { useState, useEffect } from 'react';
import QuantityCalc from './QuantityCalc';

const CartItem = (props) => {
  const [amount, setAmount] = useState(props.item.userSelectedQuantity);

  function handleChange(num) {
    setAmount(num);
  }

  return (
    <div className="cartItem">
      {props.item.name}
      <QuantityCalc
        quantity={amount}
        onChange={handleChange}
      />
      <button type="button" id="removeFromCart" onClick={() => {
        props.handleCartRemove(props.item);
      }}>
        X
      </button>
    </div>
  );
};

export default CartItem;
