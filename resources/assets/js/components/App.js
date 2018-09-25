import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './auth/index';
import Login from './auth/login';
import Home from './auth/home';
import Forgot from './auth/forgot';
import Reset from './auth/reset';

export default class App extends Component
{

   render() {
        return (
            <Router>
                <Switch>
                    <Route exact path = '/' component = {Index}/>
                    <Route path = '/login' component = {Login}/>
                    <Route path = '/home' component = {Home}/>
                    <Route path = '/forgotpassword' component = {Forgot}/>
                    <Route path = '/password/reset/:token' component = {Reset}/>
                </Switch>
            </Router>
        )
    }
}
