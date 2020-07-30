import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = (props) => {

  return (
    <div id="cartContainer">
      <div className="cartTitle">
        Cart
      </div>
      {props.cart.map(item => {
        return (
          <CartItem
            key={Math.random()}
            item={item}
            handleCartRemove={props.handleCartRemove}
            handleItemQuantityChangeCart={props.handleItemQuantityChangeCart}
          />);
      })}
      <button type="button" id="continueToCheckout">Checkout</button>
    </div >
  );
};

export default Cart;
