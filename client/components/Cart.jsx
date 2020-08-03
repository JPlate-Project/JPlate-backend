import React, { useState } from 'react';
import CartItem from './CartItem';
import { supportsGoWithoutReloadUsingHash } from 'history/DOMUtils';

const Cart = (props) => {

  let sum = 0;

  props.cart.map(item => {
    sum += item.price * item.userSelectedQuantity;
  });

  if (props.cart[0]) {
    return (

      <div id="cartContainer">
        <div className="cartTitle">
          Shopping Cart
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
        <div id="cartSubTotal">
          Subtotal: ${sum}
        </div>
        <div id="cartProceedButton">
          <button type="button" className="cartProceedButton">Proceed to checkout</button>
        </div>

      </div >
    );

  } else {
    return (
      <div id="cartContainer">
        <div id="cartEmpty">
          Cart is empty, start shopping!
        </div>
      </div>
    );
  }

};

export default Cart;
