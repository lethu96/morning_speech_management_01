import React, { Component } from 'react';
import axios from 'axios';
import {Link, withRouter } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
  } 
  
  logout(e) {
    e.preventDefault();  
    axios.post('api/logout')
      .then(response=> {
        this.props.history.push('/');
      })
      .catch(error=> {
        console.log(error);
    });
  }
  
  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  render() {

    if (this.props.link) {
      return (
        <header className="main-header">
          <a href="#" className="logo">
            <span className="logo-mini"><b>Yoole</b></span>
            <span className="logo-lg"><b>Morning Speech Manager</b></span>
          </a>
          <nav className="navbar navbar-static-top">
            <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li className="dropdown messages-menu">
                      <a className="navbar-brand" href="#" onClick={this.logout.bind(this)}>{this.props.link}</a>
                      <ul className="dropdown-menu">
                          <li className="header">You have 4 messages</li>
                          <li>
                            <ul className="menu">
                              <li>
                                <a href="#">
                                    <div className="pull-left">
                                        <img src="" className="img-circle" alt="User Image" />
                                    </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                      </ul>
                    </li>
                </ul>
            </div>
        </nav>
        </header>
      )
    }
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default  withRouter(Nav);
