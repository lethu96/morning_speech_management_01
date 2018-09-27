import React, { Component } from 'react';
import get from 'axios';
import {Link, withRouter } from 'react-router-dom';
import ItemPost from './ItemPost';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
    if (location.pathname === '/index') {
            this.getPosts();
        }
        else if (location.pathname === '/user-posts' )
        {
            this.getUserPosts();
        }
    }

    getPosts() {
        get('/list-post')
          .then(({ data }) => {
            this.setState({
                posts: data,
            });
        });
    }

    getUserPosts() {
        get('/my-post')
          .then(({ data }) => {
            this.setState({
                posts: data,
            });
        });
    }

    getItem()
    {
        if (this.state.posts instanceof Array) {
            return this.state.posts.map((post, i) => {
                return <ItemPost obj={post} key={i}/>;
            })
        }
    }

    render() {

        return (
            <div className="col-lg-6 col-md-8 no-pd">
                <div className="main-ws-sec">
                    {this.getItem()}
                </div>
            </div>
        )
    }
}
