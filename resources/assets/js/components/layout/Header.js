import React, { Component } from 'react';
import { get,post } from 'axios';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import List from './List';
import { createHashHistory } from 'history'


const history = createHashHistory()


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            posts : [],
            search : '',
            count : 0,
            width: 0,
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.getProfile();
        const width = document.getElementById("search").offsetWidth; 
        this.setState(() => ({ width : width }));

        window.addEventListener('resize', (e) => {
          const newWidth = document.getElementById('search').offsetWidth; 
          this.setState(() => ({ width : newWidth }));
        });
            document.body.addEventListener('click', (e) => {
          this.clearData(e);
        });

        document.getElementById('search').addEventListener('keydown', (e) => {
          if (e.keyCode === 38 || e.keyCode === 40) {
            e.preventDefault();
          }
        });
    }

    componentWillUnmount () {
    this.getProfile = false;
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
             handleSearch(e) {
            this.getPosts();
      }

    getPosts() {
        this.setState(() => ({ 
          posts: [],
          count: 0,
          search: this.refs.newSearch.value      
        }));

        if (this.state.search.trim() != '') {
          post("/search",{
              search : this.state.search
          })
         .then( (response) => {
            this.setState(() => ({ posts : response.data }));
          })  
        }
      }

    selectPost(keyCode) {
        if (keyCode == 40 && this.state.count < this.state.posts.length) {
          this.setState((prevState) => ({ count : prevState.count + 1 }));
        }
        if (keyCode == 38 && this.state.count > 1) {
          this.setState((prevState) => ({ count : prevState.count - 1 }));
        }
        if (keyCode == 13) {
          document.getElementById(this.state.count).childNodes[0].click();
        }
    }

    clearData(e) {
        if (e.target.id != 'search') {
          this.setState(() => ({ 
            posts: [],
            count: 0
          }));
        }
    }

    logout(e) {
        e.preventDefault();  
        post('/logout')
        window.location.href = "/login";
    }



    render() {
        const {users} = this.state;
        const ulStyle = {
      width : this.state.width + 'px'
    }

    const posts = this.state.posts.map((post, index) => (
      <List
        key = {index}
        post = {post}
        index = {index + 1}
        count = {this.state.count}
      />
    ));
        return (
            <header>
                <div className="container">
                    <div className="header-data">
                        <div className="logo">
                            <a><img src="/images/logo.png"/></a>
                        </div>
                        <div className="search-bar">
                            <form>
                               <input type="text" autoComplete="off" 
                                  onKeyUp={this.handleSearch}
                                  id="search" ref="newSearch"  
                                  className="form-control input-lg" 
                                  placeholder="Search title for ....." 
                                />

                            {this.state.posts.length > 0 && 
                              <ul style={ulStyle} className="widget-search" >
                                { posts }
                              </ul>
                            }
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
                                        <li ><a onClick={this.logout.bind(this)}>Logout</a></li>
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
