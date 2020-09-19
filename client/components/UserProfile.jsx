import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import OrderHistoryItem from './OrderHistoryItem';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import EditUserProfile from './EditUserProfile';

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
  const [edit, setEdit] = useState(false);
  console.log(user);
  const handleSubmit = () => {
    event.preventDefault();
    setEdit(!edit);
  };

  return (
    <>
      {!user ? <Redirect to="/" /> :
        <div>
          <Header />
          <div className="welcomeText">Hello {user.firstName}!</div>
          <div className="pastOrdersContainer">
            <div className="pastOrderHeader">
              Past Orders
            </div>
            {orderHistory.map(order => {
              return (
                <OrderHistoryItem
                  key={Math.random()}
                  order={order} />
              );
            })}
          </div>
          <div className="welcomeText"><h2>Hello {user.firstName}!</h2></div>
          {!edit ? (
            <form className="infoCard">
              First name, Last name:
              <div className="userInfo">{user.firstName} {user.lastName}</div>
              Email:
              <div className="userInfo">{user.email}</div>
              Password:
              <div className="userInfo"> *******</div>
              <button type="submit" className="signInSubmit" onClick={handleSubmit}>Edit</button>
            </form>) :
            <EditUserProfile />
          }

          <Footer />
        </div>}
    </>
  );
};

export default UserProfile;
