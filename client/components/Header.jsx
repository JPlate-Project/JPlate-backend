import React from 'react';
import Cart from './Cart'

const Header = (props) => {

  return (
    <div id="header">
      <h1>JPlate</h1>
      <div className="headerLinks">
        <div className="linkItem" >
          <img src='https://www.iconsdb.com/icons/preview/white/shopping-cart-xxl.png' height='40px' width='40px' onClick={props.toggleCart} />
          {props.numCartItems}
        </div>
        <div className="linkItem">
          <h2><a href="" target="_blank">Login</a></h2>
        </div>
        <div className="linkItem">
          <h2><a href="" target="_blank">About</a></h2>
        </div>
      </div>
    </div>
  )
};

export default Header;
