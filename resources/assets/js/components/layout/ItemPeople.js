import React, { Component } from 'react';
import { Link, browserHistory, Image } from 'react-router-dom';

class ItemPeople extends Component {
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
             <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="company_profile_info">
                    <div className="company-up-info">
                        <img src={this.props.obj.following.avatar} alt=""/>
                        <h3><Link to={"/user-detail/" + this.props.obj.following.id}>{this.props.obj.following.name}</Link></h3>
                        <ul>
                            <li onClick={this.follow} className="follow"> Following</li>
                        </ul>
                    </div>
                    <Link className="view-more-pro" to={"/user-detail/" + this.props.obj.following.id}>View Profile</Link>
                </div>
            </div>
        );
    }
}

export default ItemPeople;
