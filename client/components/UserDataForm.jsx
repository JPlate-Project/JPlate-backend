import React, { useRef } from 'react';

const UserDataForm = () => {

  const formRef = useRef(null);

  function handleSubmit() {
    event.preventDefault();
    const orderObj = {
      
    }
    console.log(formRef.current[0].value)
    console.log('hello')
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
