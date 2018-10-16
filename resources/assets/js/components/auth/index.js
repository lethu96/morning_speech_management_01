import React, { Component } from 'react';
import Nav from './navbar';
import {Link, withRouter } from 'react-router-dom';

class Index extends Component {
    render() {
        return (
           <div> 
                <Nav />       
                <div className="container text-center  title">
                    <h1 className="title-gt">Welcome to Morning Speech Management </h1>
                    <Link to="/login" className="login">Login</Link>
                </div> 
           </div>   
        )
    }
}
export default Index;
