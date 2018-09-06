import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/auth/index';
import Login from './components/auth/login';
import Home from './components/auth/home';
import Forgot from './components/auth/forgot';
import Reset from './components/auth/reset';

ReactDOM.render(
  <Router>
  	<Switch>
	    <Route exact path='/' component={Index}/>
	    <Route path='/login' component={Login}/>
	    <Route path='/home' component={Home}/>
	    <Route path='/forgotpassword' component={Forgot}/>
	    <Route path='/password/reset/:token' component={Reset}/>
	  </Switch>
	</Router>,
  document.getElementById('app')
);
