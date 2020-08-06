import React from 'react';
import QuantityCalc from './QuantityCalc';

const Cart = (props) => {
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
              <span className="delete-btn"><button type="button" onClick={() => { props.handleCartRemove(item); }}>X</button></span>
            </div>
            <div className="image">
              <img src={item.imageURL} alt="" />
            </div>
            <div className="description">
              {item.description}
            </div>
            <div className="quantity">
              <QuantityCalc currentPrice={item.price} quantity={item.userSelectedQuantity} />
            </div>
          </div>
        );
      }) : 'There are no items in the cart'}
    </div >
  );
};

export default Cart;
