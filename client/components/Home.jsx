import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Plate from './Plate.jsx';
import Axios from 'axios';
import Cart from './Cart';
import ItemDescription from './ItemDescription'

const Home = () => {
  const [plates, setPlates] = useState(null);

  useEffect(() => {
    let mount = true;
    async function dataFetch() {
      try {
        const response = await Axios.get('/getPlates');
        setPlates(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    dataFetch();
    return () => mount = false;
  }, []);

  return (
    <>
      <Header />
      <div className="plateContainer">
        {plates ? plates.map(plate => {
          return (<Plate key={Math.random()} currentPlate={plate} />);
        }) : ''}
      </div>
      <Footer />
    </>
  );
};

export default Home;
