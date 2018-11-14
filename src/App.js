import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Additions from './Components/Additions';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Teachers from './Components/Teachers';
import Advance from './Components/Advance';
import $ from 'jquery';



class App extends Component {
    constructor(props){
    super(props);
    this.state = {
      myData: []
    }
  }

  getMyData(){
    $.ajax({
      url: "http://localhost:3000/mydata.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({myData: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getMyData();
  }
  render() {
    console.log(this.state.myData);
    return (
      <div className="App">
            <Navbar />
            <Header />
            <Advance data={this.state.myData.courseCards} />
            <Additions data={this.state.myData.additions} />
            <Teachers data={this.state.myData.teachers} />
            <Footer />
      </div>
    );
  }
}


export default App;
