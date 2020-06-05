import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Plate from './components/Plate.jsx';
import Cart from './components/Cart'
import axios from 'axios'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      plates: null,
      cart: [],
      showCart: false
    }
    this.addToCart = this.addToCart.bind(this)
    this.toggleCart = this.toggleCart.bind(this)
  }
  async componentDidMount() {
    const response = await axios.get('/getPlates')
    this.setState({
      plates: response.data
    })

  }
  addToCart(currentItem) {
    this.setState({
      cart: [...this.state.cart, currentItem]
    })
  }
  toggleCart() {
    this.setState({
      showCart: !this.state.showCart
    })
  }

  render() {
    if (this.state.showCart) {
      return (
        <div>
          <Cart cart={this.state.cart} toggleCart={this.toggleCart} />
        </div>
      )
    } else if (this.state.plates) {
      return (
        <div>

          <Header numCartItems={this.state.cart.length} cart={this.state.cart} toggleCart={this.toggleCart} />
          <div className="plateContainer">
            {this.state.plates.map(plate => { return <Plate currentPlate={plate} cartFunction={this.addToCart} /> })}
          </div>
          <Footer />
        </div>
      )

    } else {
      return (<div>Loading...</div>)
    }
  }
}

export default App;
