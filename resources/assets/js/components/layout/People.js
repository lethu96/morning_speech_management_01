import React, { Component } from 'react';
import Header from './Header';
import {Link } from 'react-router-dom';
import { get } from 'axios';
import ItemPeople from './ItemPeople';
import ItemNotFollow from './ItemNotFollow';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
           notfollow: [],
           following: [],
        };
    }

    componentDidMount() {
        get('/user/not-follow')
        .then(({ data }) => {
            this.setState({
                notfollow: data,
            });
        });
        get('/user/following')
        .then(({ data }) => {
            this.setState({
                following: data,
            });
        });
    }

    getItemFollower() {
        if (this.state.notfollow instanceof Array) {
            return this.state.notfollow.map((user, i) => {
                return <ItemNotFollow obj={user} key={i}/>;
            })
        }
    }

    getItemFollowing() {
        if (this.state.following instanceof Array) {
            return this.state.following.map((user, i) => {
                return <ItemPeople obj={user} key={i}/>;
            })
        }
    }

    render() {
        return (
           <div> 
                <Header />
                <section className="companies-info">
                    <div className="container">
                        <div className="company-title">
                            <h3>Following</h3>
                        </div>
                        <div className="companies-list">
                            <div className="row">
                                {this.getItemFollowing()}
                            </div>
                        </div>
                        <div className="company-title bottom">
                            <h3>All Company</h3>
                        </div>
                        <div className="companies-list">
                            <div className="row">
                                {this.getItemFollower()}
                            </div>
                        </div>

                    </div>
                </section>
            </div>   
        )

    }
}

export default People;
