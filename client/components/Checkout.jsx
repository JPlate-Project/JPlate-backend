import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SignInSmall from './SignInSmall';

const Checkout = (props) => {
  { console.log(props.location) }
  return (
    <div>
      <Header
        cart={props.location.state.cart}
      />
      <div id="checkoutContainer">
        <SignInSmall />
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
