import React, { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

const SignUp = () => {
  // const formRef = useRef(null);
  return (
    <div>
      <Header />
      <h1>Make An Account</h1>
      <form onSubmit={console.log('Hey')}>
        <div className="signUpForm">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="Turnip" />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="Florence" />
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" placeholder="turn.flor@tutumails.com" />
          <label htmlFor="password">Choose a password </label>
          <input type="password" id="password1" />
          <br />
          <label htmlFor="password2">Re-type your password </label>
          <input type="password" id="password2" />
          <button className="signInSubmit" type="submit">Submit</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default SignUp;
