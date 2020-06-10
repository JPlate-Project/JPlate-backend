import React from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Cart = (props) => {

  return (
    <div id="cart">
      <button onClick={props.toggleCart}><img src="http://icons.iconarchive.com/icons/icons8/windows-8/256/Arrows-Left-Arrow-icon.png" height='20px' width='20px' /></button>
      <div id="cartItems">

        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
          {props.cart.map(item => {
            return <React.Fragment>
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>10</td>
                <td><img src={item.imageURL} height='40px' width='40px' /></td>
              </tr>
            </React.Fragment>
          })}

        </table>
      </div>
    </div>
  )

}

export default Cart
