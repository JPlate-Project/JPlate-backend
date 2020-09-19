import React, { useRef } from 'react';
import Axios from 'axios';

const EditUserProfile = () => {
  const user = JSON.parse(window.localStorage.getItem('cookie'));
  const formRef = useRef(null);

  async function handleSubmit() {
    Axios.patch('/resetPassword', {
      userId: user.userId,
      newPassword: formRef.current.password.value
    });
  }

  return (
    <form className="infoCard" onSubmit={handleSubmit} ref={formRef}>
      Change Password:
      <input type="password" id="password" className="userInfo" defaultValue="*******" />
      <button type="submit" className="signInSubmit" onClick={handleSubmit}>Save Changes</button>
    </form>
  );
};

export default EditUserProfile;
