import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Redirect } from 'react-router-dom';

const UserProfile = () => {
  const user = JSON.parse(window.localStorage.getItem('cookie'));

  return (
    <>
      {!user ? <Redirect to="/" /> :
        <div>
          <Header />
          <div className="welcomeText">Hello {user.firstName}!</div>
          <div className="pastOrders">Past Orders</div>
          <div className="favorite">Favorite</div>
          <Footer />
        </div>}
    </>
  );
};

export default UserProfile;
