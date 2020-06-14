import React from 'react';
import UserProfile from './components/UserProfile';
import { Route, Switch } from 'react-router-dom';


const Routes = () => {

  return (
    <Switch>
      <Route exact path="/account" component={UserProfile} />
    </Switch>
  );
};

export default Routes;
