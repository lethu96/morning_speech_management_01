import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './auth/index';
import Login from './auth/login';
import Home from './auth/home';
import Forgot from './auth/forgot';
import Reset from './auth/reset';
import User from './admin/User';
import Post from './admin/Post';
import Ranking from './admin/Ranking';
import RandomUser from './admin/RandomUser';
import {browserHistory } from 'react-router';
import CreateUser from './admin/CreateUser';
import UpdateUser from './admin/UpdateUser';
import Master from './layout/Master';
import CreatePost  from './layout/CreatePost';
import MyPost from './layout/MyPost';
import People from './layout/People';
import DetailPost from  './layout/DetailPost';
export default class App extends Component
{
    checkrender() {
        if (this.state.success === true) {
            return 
        }
    }

    render() {
        return (
                <Router>
                    <Switch>
                        <Route exact path = '/' component = {Index}/>
                        <Route exact path = '/index' component = {Master} /> 
                        <Route path = '/login' component={Login}/>
                        <Route path = '/home' component={Home}/>
                        <Route path = '/forgotpassword' component={Forgot}/>
                        <Route path = '/password/reset/:token' component={Reset}/>
                        <Route path = "/list-post" component = {Post} />
                        <Route path = "/list-user" component = {User} />
                        <Route path = "/rank" component = {Ranking} />
                        <Route path = "/random-user" component = {RandomUser} />
                        <Route path = "/add-user" component = {CreateUser} />
                        <Route path = "/update-user/:id" component = {UpdateUser} />
                        <Route path = "/create-post" component = {CreatePost} />
                        <Route path = "/my-posts" component = {MyPost} />
                        <Route path = "/people" component = {People} />
                        <Route path = "/detail-posts/:id" component = {DetailPost} />
                    </Switch>
            </Router>
        )
    }
}
