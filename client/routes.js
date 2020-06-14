import React from 'react';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import { HashRouter, Route } from 'react-router-dom';


const Routes = () => {

  return (
    <HashRouter>
      <Route path="/" component={Home} />
      <Route exact path="/account" component={UserProfile} />
    </HashRouter>
  );
};

export default Routes;
