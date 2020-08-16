import React from 'react';
import SignInSmall from './SignInSmall';
import UserDataFrom from './UserDataForm';
import CartItem from './CartItem';

const Checkout = (props) => {

  return (
    <div id="checkoutContainer">
      <div className="cartTitle">
        Checkout
      </div>
      <div id="checkoutBody">
        <div>
          {
            props.cart.map(item => {
              return (
                <CartItem
                  key={Math.random()}
                  cart={props.cart}
                  handleSetCart={props.handleSetCart}
                  item={item}
                />
              );
            })
          }
          <div id="cartSubTotal">
            Subtotal: ${props.sum}
          </div>
        </div>
        <UserDataFrom cart={props.cart} total={props.sum} />
        {/* <SignInSmall /> */}
      </div>
    </div>

  );
};

export default Checkout;
