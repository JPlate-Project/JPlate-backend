import React, { useState } from 'react';
import { setItemQuantity } from '../utils/utilsFunctions';
import QuantityCalc from './QuantityCalc';

const Cart = (props) => {
  const [sum, setSum] = useState(0);

  function handleQuantityClick(mathOperation) {
    setQuantity(setItemQuantity(quantity, mathOperation));
  }
  return (
    <div id="cartContainer">
      {props.cart ? props.cart.map(item => {
        return (
          <div key={Math.random()}>{item.name}{item.userSelectedQuantity}
            <QuantityCalc currentPrice={item.price} quantity={item.quantity} handleClick={handleQuantityClick} />
          </div>

        );
      }) : "There are no items in the cart"}
      {sum}

    </div>
  );
};

export default Cart;
