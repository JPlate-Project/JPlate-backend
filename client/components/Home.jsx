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

  function handleQuantityClick() {
    setCart([...cart]);
  }

  function handleAddToCart(itemToAdd, quantity) {
    let push = true;
    cart.map((item, index) => {
      if (item.id === itemToAdd.id) {//if item is already in cart, update the quantity
        cart[index].userSelectedQuantity = quantity + cart[index].userSelectedQuantity;
        push = false;
      }
    });
    if (push) {
      itemToAdd.userSelectedQuantity = quantity;
      cart.push(itemToAdd);
    }
    setCart([...cart]);
  }

  function handleCartRemove(itemToRemove) {

    cart.map((item, index) => {
      if (item.id === itemToRemove.id) {
        cart.splice(index, 1);
      }
    });

    setCart([...cart]);
  }

  function handleShowCart() {
    setCartShow(!showCart);
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
      <Header cart={cart} handleShowCart={handleShowCart} />
      <div className="plateContainer" >
        {showCart ? <Cart cart={cart} handleCartRemove={handleCartRemove} handleQuantityClick={handleQuantityClick} /> : ''}
        {plates ? plates.map(plate => {
          return (<Plate key={Math.random()} currentPlate={plate} handleAddToCart={handleAddToCart} />);
        }) : ''}
      </div>
      <Footer />
    </>
  );
};

export default Home;
