import React, { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

const SignUp = () => {
  const formRef = useRef(null);
  const passwordRef = useRef(null);

  function handFormSubmit() {
    event.preventDefault();
    console.log(formRef.current[0].value);
  }

  // function checkPasswordLevel() {
  // console.log('Check Password Level');
  // https://www.enzoic.com/docs-password-strength-meter-quick-start/
  // }

  function checkPasswordMatch(event) {
    if (event.target.value === passwordRef.current.value) {
      const passwordEffect = document.getElementById('password2');
      passwordEffect.style.backgroundColor = 'lightgreen';
    }
  }


  return (
    <div>
      <Header />
      <h1>Make An Account</h1>
      <div className="signUpForm">
        <form onSubmit={handFormSubmit} ref={formRef}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="Turnip" />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="Florence" />
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" placeholder="turn.flor@tutumails.com" />
          <label htmlFor="password">Choose a password </label>
          <input type="password" id="password1" ref={passwordRef} />
          <br />
          <label htmlFor="password2">Re-type your password </label>
          <input type="password" id="password2" onChange={checkPasswordMatch} />
          <button className="signInSubmit" type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
