import React from 'react';
import Header from './Header';
import Footer from './Footer';

const UserProfile = () => {
  let user = 'Landon';
  return (
    <div>
      <Header />
      <div className="welcomeText">Hello {user}!</div>
      <div className="pastOrders">Past Orders</div>
      <div className="favorite">Favorite</div>
      <Footer />
    </div>
  );
};

export default UserProfile;
