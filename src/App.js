import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Additions from './Components/Additions';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Teachers from './Components/Teachers';
import Advance from './Components/Advance';



class App extends Component {
  render() {
    return (
      <div className="App">
            <Navbar />
            <Header />
            <Advance />
            <Additions />
            <Teachers />
            <Footer />
      </div>
    );
  }
}


 

export default App;
