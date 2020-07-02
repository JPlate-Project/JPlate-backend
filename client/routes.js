import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import SignIn from './components/SignIn';


const Routes = () => {

  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={UserProfile} />
      <Route exact path="/signin" component={SignIn} />
    </BrowserRouter>
  );
};

export default Routes;
