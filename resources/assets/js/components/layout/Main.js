import React, { Component } from 'react';
import get from 'axios';
import {Link, withRouter } from 'react-router-dom';
import ItemPost from './ItemPost';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            visible: 3,
            error: false
        };
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
    if (location.pathname === '/index') {
            this.getPosts();
        }
        else  if (location.pathname === '/user-posts' )
        {
            this.getUserPosts();
        }
    }

    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 3};
        });
    }

    getPosts() {
        get('/list-post-admin')
          .then(({ data }) => {
            this.setState({
                posts: data,
            });
        }).catch(error => {
            this.setState({
                error: true
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
                return;
            })
        }
    }

    render() {

        return (
            <div className="col-lg-6 col-md-8 no-pd">
                <div className="main-ws-sec">
                    {this.state.posts.slice(0, this.state.visible).map((item, index) => {
                      return (
                         <ItemPost obj={item} key={index}/>
                      );
                    })}
                    {this.state.visible < this.state.posts.length &&
                        <div className="load-more col-md-12">
                         <button onClick={this.loadMore} type="button" ><i className="fa fa-ellipsis-h"></i></button>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
