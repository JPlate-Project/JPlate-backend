import React, { useState } from 'react';
import QuantitySelector from './QuantitySelector';

const CartItem = (props) => {
  const [amount, setAmount] = useState(props.item.userSelectedQuantity);

  function handleChange(num) {
    setAmount(num);
  }

  return (
    <div className="cartItem">
      {props.item.name}
      <QuantitySelector
        item={props.item}
        handleItemQuantityChangeCart={props.handleItemQuantityChangeCart}
        handleCartRemove={props.handleCartRemove}
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
