import React, { Component } from 'react';

import Header from './Header';
import Additions from './Additions';
import Teachers from './Teachers';
import Advance from './Advance';

import $ from 'jquery';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            myData: []
        }
    }


   /* getMyData(){
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
    }*/


    componentDidMount() {
        fetch('http://localhost:3000/mydata.json')
            .then(response => response.json())
            .then(data => this.setState({ myData:data }));
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Advance data={this.state.myData.courseCards} />
                <Additions data={this.state.myData.additions} />
                <Teachers data={this.state.myData.teachers} />
            </div>
        );
    }
}


export default Home;
