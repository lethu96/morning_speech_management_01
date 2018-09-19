import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import { Link, Image } from 'react-router-dom';
import post from 'axios';

class ItemNotFollow extends Component {
    constructor(props)
    {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = new FormData();
        data.append('user_id', this.props.obj.id)
        post('/follow', data)
        .then(
            (response) => {}
        );
    }

    render()
    {
        return (
             <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="company_profile_info">
                    <div className="company-up-info">
                        <img src={this.props.obj.avatar} alt=""/>
                        <h3>{this.props.obj.name}</h3>
                        
                        <ul>
                            <form onSubmit={this.handleSubmit}>
                            <input type="submit" value="+ Follow" className="btn btn-danger"/>
                            </form>
                        </ul>
                    </div>
                    <a href="#" title="" className="view-more-pro">View Profile</a>
                </div>
            </div>
        );
    }
}
export default ItemNotFollow;