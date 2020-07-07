import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


const Routes = () => {

  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={UserProfile} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </BrowserRouter>
  );
};

export default Routes;
