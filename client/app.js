import React, { useState, createContext } from 'react';
import Routes from './routes';

export const AuthContext = createContext();

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      <Routes />
    </AuthContext.Provider>
  );
};


export default App;
