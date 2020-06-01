import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Plate from './components/Plate.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <div className="plateContainer">
        <Plate />
        <Plate />
        <Plate />
        <Plate />
      </div>
      <Footer />
    </div>
  );
};

export default App;
