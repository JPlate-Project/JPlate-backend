import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Plate from './components/Plate.jsx';
import axios from 'axios'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      plates: null
    }

  }
  async componentDidMount() {

    const response = await axios.get('/getPlates')
    this.setState({
      plates: response.data
    })

  }
  render() {

    if (this.state.plates) {
      return (
        <div>

          <Header />
          <div className="plateContainer">
            {this.state.plates.map(plate => { return <Plate currentPlate={plate} /> })}







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
