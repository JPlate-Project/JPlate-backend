import React, { useState } from 'react';
import Routes from './routes';
export const LoggedInContext = React.createContext();

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <LoggedInContext.Provider value={[auth, setAuth]}>
      <Routes />
    </LoggedInContext.Provider>
  );
};


export default App;
