import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../app';

const Header = (props) => {
  const [auth] = useContext(AuthContext);
  let sum = 0;
  if (props.cart) {
    props.cart.map(item => {
      sum += item.userSelectedQuantity;
    });
  }

  return (
    <div id="header">
      <h1><Link to="/">JPlate</Link></h1>
      <div className="headerLinks">
        <div className="linkItem" >
          <img
            id="headerCart" src="https://image.flaticon.com/icons/svg/25/25619.svg" onClick={props.handleShowCart} />
          {sum >= 1 ? sum : ''}
        </div>
        <div className="linkItem">
          <h2><Link to="/about">About</Link></h2>
        </div>
        {auth || window.localStorage.cookie ?
          (<div className="linkItem">
            <h2><Link to="/profile" >Profile</Link></h2>
          </div>)
          :
          (<div className="linkItem">
            <h2><Link to="/signin" >Sign In</Link></h2>
          </div>)
        }
      </div>
    </div>
  );
};

export default Header;
