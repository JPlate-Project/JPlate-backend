import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

const UserProfile = () => {

  const user = JSON.parse(window.localStorage.getItem('cookie'));
  const [orderHistory, setOrderHistory] = useState([]);

  let mount = false;
  useEffect(() => {
    mount = true;
    async function dataFetch() {
      try {

        const orderHistoryFetch = (await Axios.get(`/getOrders/${user.email}`)).data;
        setOrderHistory(orderHistoryFetch);
      } catch (err) {
        console.error(err);
      }
    }
    dataFetch();
  }, []);

  return (
    <>
      {!user ? <Redirect to="/" /> :
        <div>
          <Header />
          <div className="welcomeText">Hello {user.firstName}!</div>
          <div className="pastOrders">Past Orders
            {console.log(orderHistory[0])}
          </div>
          <div className="favorite">Favorite</div>

          <Footer />
        </div>}
    </>
  );
};

export default UserProfile;
