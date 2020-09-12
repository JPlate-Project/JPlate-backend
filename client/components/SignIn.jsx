import React, { useState, useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LoggedInContext } from '../app';
import Header from './Header';
import Footer from './Footer';
import Axios from 'axios';

function SignIn(props) {
  const [checkBox, setCheckBox] = useState(false);
  const formRef = useRef(null);
  // const history = useHistory();
  const [auth, setAuth] = useContext(LoggedInContext);

  function handleCheckBox() {
    setCheckBox(!checkBox);
  }

  async function handleSubmit() {
    event.preventDefault();
    const userData = {
      email: formRef.current[0].value,
      password: formRef.current[1].value
    };
    try {
      const login = await Axios.post('/login', userData);
      if (login) {
        setAuth(true);
        // history.push('/');
      } else {
        console.log('login UN-successful');
      }
    } catch (err) {
      console.error(err);
    }

  }

  return (
    <div>
      <Header />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="signInContainer">
          <label>Email</label>
          <input type="text" />
          <label>Password</label>
          <input type={checkBox ? 'text' : 'password'} />
          <label>Show Password</label>
          <input type="checkbox" onChange={handleCheckBox} />
          <button className="signInSubmit" type="submit">Submit</button>
          <label>Don't have an account?</label>
          <Link to="/signup">Sign Up Here</Link>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default SignIn;
