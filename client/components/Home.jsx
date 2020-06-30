/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
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

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       plates: null,
//       cart: [],
//       showCart: false
//     };
//     this.addToCart = this.addToCart.bind(this)
//     this.toggleCart = this.toggleCart.bind(this)
//     this.removeFromCart = this.removeFromCart.bind(this)
//   }
//   async componentDidMount() {
//     const response = await axios.get('/getPlates')
//     this.setState({
//       plates: response.data
//     });

//   }
//   addToCart(currentItem) {
//     if (this.state.cart.includes(currentItem)) {
//       alert(`${currentItem.name} is already in the cart. Increase the quantity on the cart page.`)
//       return
//     }
//     this.setState({
//       cart: [...this.state.cart, currentItem]
//     })
//   }
//   removeFromCart(currentItemIDToDelete) {
//     const tempCart = []
//     this.state.cart.map(currentItem => {
//       if (!(currentItem.id === currentItemIDToDelete)) {
//         tempCart.push(currentItem)
//       }
//     })
//     this.setState({
//       cart: tempCart
//     })
//   }
//   toggleCart() {
//     this.setState({
//       showCart: !this.state.showCart
//     })
//   }

//   render() {
//     if (this.state.plates) {
//       return (
//         <div>
//           <Header numCartItems={this.state.cart.length} cart={this.state.cart} toggleCart={this.toggleCart} />
//           <div className="plateContainer">
//             {this.state.showCart ? <Cart cart={this.state.cart} toggleCart={this.toggleCart} removeItem={this.removeFromCart} /> : ''}
//             {this.state.plates.map(plate => { return <Plate key={Math.random()} currentPlate={plate} cartFunction={this.addToCart} />; })}
//           </div>
//           <Footer />
//         </div>
//       )

//     } else {
//       return (<div>Loading...</div>)
//     }
//   }
// }

export default Home;
