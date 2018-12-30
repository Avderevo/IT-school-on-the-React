import React from 'react';

import Header from './Header';
import {Additions} from './Additions';
import {Teachers} from './Teachers';
import {Advance} from './Advance';
import { withRouter } from 'react-router-dom'


const Home = () =>{

    return (
        <div className="App">
            <Header />
            <Advance />
            <Additions />
            <Teachers />
        </div>
    );

};

export default withRouter(Home);
