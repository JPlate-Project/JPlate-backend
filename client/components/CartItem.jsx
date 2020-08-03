import React, { useState } from 'react';
import QuantitySelector from './QuantitySelector';

const CartItem = (props) => {
  const [amount, setAmount] = useState(props.item.userSelectedQuantity);

  function handleChange(num) {
    setAmount(num);
  }

  return (
    <div className="cartItem">
      <div className="itemTitle">
        {props.item.name}
      </div>
      <QuantitySelector
        item={props.item}
        handleItemQuantityChangeCart={props.handleItemQuantityChangeCart}
        handleCartRemove={props.handleCartRemove}
      />
      <div className="itemPrice">
        ${props.item.price}
      </div>
      <img src={props.item.imageURL} className="cartImg" />

      <button type="button" id="removeFromCart" onClick={() => {
        props.handleCartRemove(props.item);
      }}>
        X
      </button>
    </div>
  );
};

export default CartItem;
