import React from 'react';

const Cart = (props) => {
  let sum = 0;
  return (
    <div id="cartContainer">
      {props.cart ? props.cart.map(item => {
        sum += item.price * item.userSelectedQuantity;
        return (<div key={Math.random()}>{item.name}{item.userSelectedQuantity}
        </div>);
      }) : "There are no items in the cart"}
      {sum}

    </div>
  );
};

export default Cart;
