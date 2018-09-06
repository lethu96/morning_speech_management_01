import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/auth/index';
import Login from './components/auth/login';
import Home from './components/auth/home';
import Forgot from './components/auth/forgot';
import Reset from './components/auth/reset';
import ShowPost from './components/admin/ShowPost';
import CreatePost from './components/admin/CreatePost';
import UpdatePost from './components/admin/UpdatePost';
import ShowUser from './components/admin/ShowUser';
import CreateUser from './components/admin/CreateUser';
import UpdateUser from './components/admin/UpdateUser';
import RandomUser from './components/admin/RandomUser';
import Ranking from './components/admin/Ranking';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={Index}/>
      <Route path='/login' component={Login}/>
      <Route path='/home' component={Home}/>
      <Route path='/forgotpassword' component={Forgot}/>
      <Route path='/password/reset/:token' component={Reset}/>
      <Route path = "/list-post" component = {ShowPost} />
      <Route path = "/add-post" component = {CreatePost} />
      <Route path = "/update-post/:id" component = {UpdatePost} />
      <Route path = "/list-user" component = {ShowUser} />
      <Route path ="/add-user" component = {CreateUser} />
      <Route path = "/update-user/:id" component = {UpdateUser} />
      <Route path ="/rank" component = {Ranking} />
      <Route path ="/random-user" component = {RandomUser} />
    </Switch>
  </Router>,
  document.getElementById('app')
);
