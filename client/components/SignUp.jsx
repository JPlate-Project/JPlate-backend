import React, { useState, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import Axios from 'axios';

const SignUp = () => {
  const formRef = useRef(null);
  const passwordRef = useRef(null);
  const [passwordMatch, setPasswordMatch] = useState(false);

  function handleFormSubmit() {
    event.preventDefault();
    const userData = formRef.current;
    //May need to add a function that checks if the user already exists beforeCreate... seems like a back end function.
    if (passwordMatch === true) {
      console.log('true');
      Axios.post('/users', {
        firstName: userData[0].value,
        lastName: userData[1].value,
        email: userData[2].value,
        password: userData[4].value,
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }

  // function checkPasswordLevel() {
  // console.log('Check Password Level');
  // https://www.enzoic.com/docs-password-strength-meter-quick-start/
  // }

  function checkPasswordMatch(event) {
    if (event.target.value === passwordRef.current.value) {
      const passwordEffect = document.getElementById('password2');
      passwordEffect.style.backgroundColor = 'lightgreen';
      setPasswordMatch(!passwordMatch);
    }
  }

  return (
    <div>
      <Header />
      <h1>Make An Account</h1>
      <div className="signUpForm">
        <form onSubmit={handleFormSubmit} ref={formRef}>
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
