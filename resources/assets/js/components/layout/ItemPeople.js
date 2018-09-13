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
                        <img src={this.props.obj.avatar} alt=""/>
                        <h3>{this.props.obj.name}</h3>
                        <h4>{this.props.obj.position.name}</h4>
                        <ul>
                            <li><a href="#" title="" className="follow">Follow</a></li>
                        </ul>
                    </div>
                    <a href="#" title="" className="view-more-pro">View Profile</a>
                </div>
            </div>
        );
    }
}
export default ItemPeople;