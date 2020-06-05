import React from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Cart = (props) => {

  return (
    <div>
      <button onClick={props.toggleCart}>Back</button>
      {props.cart.map(item => { console.log(item) })}
    </div>
  )

}

export default Cart
