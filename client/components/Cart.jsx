import React, { useState } from 'react';
import { setItemQuantity } from '../utils/utilsFunctions';
import QuantityCalc from './QuantityCalc';

const Cart = (props) => {

  const [singleItemQuantity, setSingleItemQuantity] = useState(0)


  return (
    <div id="cartContainer">
      <div className="cartTitle">
        Cart
      </div>
      {props.cart ? props.cart.map(item => {
        return (
          <div key={Math.random()} className="item">
            {item.name}
            <div className="buttons">
              <span className="delete-btn"><button type="button" style={{ height: '30px', width: '30px' }} onClick={() => { props.handleCartRemove(item); }}>X</button></span>
            </div>
            <div className="image">
              <img src={item.imageURL} style={{ height: '30px', width: '30px' }} alt="" />
            </div>
            <div className="description">
              {item.description}
            </div>
            <div className="quantity">

              <QuantityCalc currentPrice={item.price} quantity={item.userSelectedQuantity} handleClick={props.handleQuantityClick} />
            </div>
            <div className="totalPrice">


            </div>
          </div>
        );
      }) : "There are no items in the cart"}

    </div >
  );
};

export default Cart;
