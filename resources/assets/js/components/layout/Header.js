import React, { Component } from 'react';
import { get,post } from 'axios';
import {Link, withRouter } from 'react-router-dom';
import { browserHistory } from 'history'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        this.getProfile();
    }

    componentWillReceiveProps({ location = {} }) {
        if (location.pathname === '/index' && location.pathname !== this.props.location.pathname) {
            this.getProfile();
        }
    }

    getProfile() {
        get('/profile')
        .then(({ data }) => {
            this.setState({
                users: data,
            });
        });
    }

    logout(e) {
        e.preventDefault();  
        post('/logout')
        .then(response => {
            this.props.history.push('/login');
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        const {users} = this.state;
        return (
            <header>
                <div className="container">
                    <div className="header-data">
                        <div className="logo">
                            <a><img src="/images/logo.png"/></a>
                        </div>
                        <div className="search-bar">
                            <form>
                                <input type="text" name="search" placeholder="Search..."/>
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/index">
                                        <span><img src="/images/icon1.png" alt=""/></span>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                   <Link to="#">
                                    <span><img src="/images/icon2.png" alt=""/></span>
                                        Post
                                   </Link>
                                    <ul>
                                        <li><Link to="create-post">New Post </Link></li>
                                        <li><Link to="user-posts">My Post </Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/people">
                                    <span><img src="/images/icon4.png" alt=""/></span> 
                                    People
                                    </Link>
                                </li>
                                <li>
                                   <Link to="#">
                                    <span><img src="/images/icon2.png" alt=""/></span>
                                       {users.name}
                                   </Link>
                                    <ul>
                                        <li><Link  to={"/user-detail/" + users.id}> My Profile </Link></li>
                                        <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}
