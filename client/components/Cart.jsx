import React from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Cart = (props) => {
  console.log(props.cart)
  if (!(props.cart.length)) {
    return (
      <div id="emptyCart">
        <button onClick={props.toggleCart}><img src="http://icons.iconarchive.com/icons/icons8/windows-8/256/Arrows-Left-Arrow-icon.png" height='20px' width='20px' /></button>
        Cart is empty
      </div>
    )
  }
  return (
    <div id="cart">
      <button onClick={props.toggleCart}><img src="http://icons.iconarchive.com/icons/icons8/windows-8/256/Arrows-Left-Arrow-icon.png" height='20px' width='20px' /></button>

      <div id="cartItems">

        <table>
          <tr>
            <th>Name</th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
          {props.cart.map(item => {
            return <React.Fragment>
              <tr>
                <td>{item.name}</td>
                <td><img src={item.imageURL} height='40px' width='40px' /></td>
                <td>${item.price}</td>
                <td>0<button>+</button><button>-</button></td>
                <td><button onClick={() => { return props.removeItem(item.id) }}><img src="https://cdn4.iconfinder.com/data/icons/controls-add-on-flat/48/Contols_-_Add_On-35-512.png" height="40px" width="40px" /></button></td>
              </tr>

            </React.Fragment>
          })}

        </table>
      </div>
    </div>
  )

}

export default Cart
