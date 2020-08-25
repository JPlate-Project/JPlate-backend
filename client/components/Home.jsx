import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Plate from './Plate.jsx';
import Cart from './Cart';
import Axios from 'axios';

const Home = () => {

  const [plates, setPlates] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setCartShow] = useState(false);

  function handleShowCart() {
    setCartShow(!showCart);
  }

  function handleSetCart(newCart) {
    setCart([...newCart]);
  }

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
      <Header
        cart={cart}
        handleShowCart={handleShowCart}
      />
      <div className="plateContainer" >
        {showCart ?
          <Cart
            cart={cart}
            handleSetCart={handleSetCart}
          />
          : ''}
        {plates ?
          plates.map(plate => {
            return (
              <Plate
                key={Math.random()}
                cart={cart}
                plate={plate}
                handleSetCart={handleSetCart}
              />
            );
          }) : ''}
      </div>
      <Footer />
    </>
  );
};

export default Home;
