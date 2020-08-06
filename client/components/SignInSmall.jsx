import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const SignInSmall = () => {
  const [checkBox, setCheckBox] = useState(false);
  const formRef = useRef(null);

  function handleCheckBox() {
    setCheckBox(!checkBox);
  }

  function handleSubmit() {
    //take email and password, check DB to see if user exists and if password matches the user's account.
    // If sign in successful, send the user back to their origin window.location.
    // If sign in fails, show message "Email or Password is incorrect."
    event.preventDefault();

    console.log('This is useRef---', formRef.current[0].value);
    console.log('useRef Stuff---', formRef.current[1].value);
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="signInContainerSmall">
        <h1>Sign In</h1>
        <label>Email</label>
        <input type="text" className="inputSmallSignIn" />
        <label>Password</label>
        <input type={checkBox ? 'text' : 'password'} />
        <label>Show Password</label>
        <input type="checkbox" onChange={handleCheckBox} />
        <button className="signInSubmit" type="submit">Submit</button>
        <label>Don't have an account?</label>
        <Link to="/signup">Sign Up Here</Link>
      </div>
    </form>

  );
};

export default SignInSmall;
