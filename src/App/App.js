import React, { Component } from 'react';
import '../style/App.css';
import Footer from '../Components/Common/Footer';
import Navbar from '../Components/Common/Navbar';
import  Main from '../Components/Main';


class App extends Component {

  render() {
    return (
      <div className="App app-wrapper">
            <Navbar />
            <Main />
            <Footer />
      </div>
    );
  }
}


export default App;
