import { Switch, Route } from 'react-router-dom';
import LoginPage from './registration/LoginPage';
import RegisterPage from './registration/RegisterPage';
import Home from './Home';
import React from 'react';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/signup/' component={RegisterPage} />
            <Route path='/login/' component={LoginPage} />
            <Route path='/' component={Home} />
        </Switch>
    </main>
);


export default Main;