import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router-dom';
import { get, post } from 'axios';

class ItemNotFollow extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            checkFollow: '',
        }

       this.followUser = this.followUser.bind(this);
    }

    followUser() {
        this.setState(prevState => ({
            checkFollow: !prevState.checkFollow
        }));
        
        let data = new FormData();
        data.append('user_id', this.props.obj.id)
        post('/follows', data)
    }

    render()
    {
        return (
             <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="company_profile_info">
                    <div className="company-up-info">
                        <img src={this.props.obj.avatar} alt=""/>
                        <h3><Link to={"/user-detail/" + this.props.obj.id}>{this.props.obj.name}</Link></h3>
                        <ul>
                            <li onClick={this.followUser} className={this.state.checkFollow ? 'follow' : 'unfollow'}><i className= {this.state.checkFollow ? 'fa fa-check' : 'fa fa-plus'} >Follow</i></li>
                        </ul>
                    </div>
                    <Link className="view-more-pro" to={"/user-detail/" + this.props.obj.id}> View Profile</Link>
                </div>
            </div>
        );
    }
}

export default ItemNotFollow;
