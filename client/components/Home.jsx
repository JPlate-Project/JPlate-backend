import React, { useState, useEffect, useContext } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Plate from './Plate.jsx';
import Cart from './Cart';
import Axios from 'axios';
import { AuthContext } from '../app';

const Home = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [plates, setPlates] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setCartShow] = useState(false);

  async function handleAuth() {
    const authResponse = await Axios.get('/getSession')
    // console.log(authResponse)
  }

  function handleShowCart() {
    setCartShow(!showCart);
  }

  function handleSetCart(newCart) {
    setCart([...newCart]);
  }

  let mount = false;
  useEffect(() => {
    mount = true;
    async function dataFetch() {
      try {
        handleAuth();
        const response = await Axios.get('/getPlates');
        setPlates(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    dataFetch();
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
