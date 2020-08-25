import React, { useState } from 'react';
import CartItem from './CartItem';
import Checkout from './Checkout';
import OrderSubmitted from './OrderSubmitted';

const Cart = (props) => {

  const [checkout, setCheckout] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  function handleShowCheckout() {
    setCheckout(!checkout);
  }

  function handleOrderSubmitted() {
    setOrderSubmitted(!orderSubmitted);
  }

  let sum = 0;
  props.cart.map(item => {
    sum += item.price * item.userSelectedQuantity;
  });

  if (checkout) {
    return (
      <Checkout
        cart={props.cart}
        handleSetCart={props.handleSetCart}
        sum={sum}
        handleOrderSubmitted={handleOrderSubmitted}
        handleShowCheckout={handleShowCheckout}
      />
    );
  }

  if (props.cart[0] && orderSubmitted === false) {

    return (
      <div id="cartContainer" >
        <div className="cartTitle">
          Shopping Cart
        </div>
        {
          props.cart.map(item => {
            return (
              <CartItem
                key={Math.random()}
                cart={props.cart}
                handleSetCart={props.handleSetCart}
                item={item}
              />);
          })
        }
        <div id="cartSubTotal">
          Subtotal: ${sum}
        </div>
        <div id="cartProceedButton">
          <button type="button" className="cartProceedButton" onClick={handleShowCheckout}> Proceed to checkout</button>
        </div>
      </div >
    );
  } else if (orderSubmitted) {
    return (
      <OrderSubmitted handleOrderSubmitted={handleOrderSubmitted} />
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
