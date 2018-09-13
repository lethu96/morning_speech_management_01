import React, { Component } from 'react';
import Header from './Header';
import {Link } from 'react-router-dom';
import { get } from 'axios';
import ItemPeople from './ItemPeople';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
               users: [],
        };
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        get('/api/users')
        .then(({ data }) => {
            this.setState({
                users: data,
            });
          });
    }

    getItemUser()
    {
        if (this.state.users instanceof Array) {
            return this.state.users.map((user, i) => {
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
                            <h3>All Companies</h3>
                        </div>
                        <div className="companies-list">
                            <div className="row">
                                {this.getItemUser()}
                            </div>
                        </div>
                    </div>
                </section>
            </div>   
        )

    }
}
export default People;
