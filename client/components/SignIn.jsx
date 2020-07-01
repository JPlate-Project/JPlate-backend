import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const SignIn = () => {
  const [checkBox, setCheckBox] = useState(false);

  function handleCheckBox() {
    setCheckBox(!checkBox);
  }

  return (
    <div>
      <Header />
      <h1>Sign In</h1>
      <form>
        <div className="signInContainer">
          <label>Email</label>
          <input type="text" />
          <label>Password</label>
          <input type={checkBox ? 'text' : 'password'} />
          <label>Show Password</label>
          <input type="checkbox" onChange={handleCheckBox} />
          <button className="signInSubmit" type="submit">Submit</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default SignIn;
