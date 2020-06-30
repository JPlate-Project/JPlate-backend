import React from 'react';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import { BrowserRouter, Route } from 'react-router-dom';


const Routes = () => {

  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={UserProfile} />
    </BrowserRouter>
  );
};

export default Routes;
