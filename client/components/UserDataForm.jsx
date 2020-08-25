import React, { useRef } from 'react';
import Axios from 'axios';


const UserDataForm = (props) => {

  const formRef = useRef(null);

  async function handleSubmit() {
    event.preventDefault();
    try {
      await Axios.post('/submitOrder', {
        name: formRef.current[0].value,
        email: formRef.current[1].value,
        shippingAddress: formRef.current[2].value,
        items: props.cart,
        total: props.total
      }).then(onSuccess => {
        props.handleSetCart([]);
        props.handleOrderSubmitted();
        props.handleShowCheckout();
      });
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="checkoutNoSignIn">
          <label>First and last Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="text" />
          <label>Shipping Address</label>
          <input type="text" />
          <label>Credit Card</label>
          <input type="text" />
          <button type="submit" className="submitOrderButton">Submit order</button>
        </div>
      </form>
    </div>
  );
};

export default UserDataForm;
