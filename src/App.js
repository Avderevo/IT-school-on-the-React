import React, { Component } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Main from './Components/Main';


class App extends Component {

  render() {
    return (
      <div className="App">
            <Navbar />
            <Main />
            <Footer />
      </div>
    );
  }
}


export default App;
