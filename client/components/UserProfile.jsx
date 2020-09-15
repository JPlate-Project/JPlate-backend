import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import EditUserProfile from './EditUserProfile';

const UserProfile = () => {
  const user = JSON.parse(window.localStorage.getItem('cookie'));
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
