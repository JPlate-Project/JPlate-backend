import React from 'react';


const EditUserProfile = () => {
  const user = JSON.parse(window.localStorage.getItem('cookie'));
  console.log(user);
  return (
    <div className="infoCard">
      First Name, Last Name:
      <input type="text" className="userInfo" placeholder={`Name: ${user.firstName + ' ' + user.lastName}`} />
      Email Address:
      <input type="text" className="userInfo" placeholder={`Email: ${user.email}`} />
      New Password:
      <input type="text" className="userInfo" placeholder="Change your password" />
      <button type="submit" className="signInSubmit">Save Changes</button>
    </div>
  );
};

export default EditUserProfile;
