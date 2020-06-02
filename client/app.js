import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Plate from './components/Plate.jsx';

class App extends React.Component {

  render() {
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
    )
  }
}

export default App;
