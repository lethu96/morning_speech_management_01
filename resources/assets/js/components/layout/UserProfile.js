import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import { get } from 'axios';
import { Form } from 'semantic-ui-react';

export default class UserProfile extends Component {
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

    render() {
    	const {users} = this.state;

	    return (
	      	<div className="col-lg-3 col-md-4 pd-left-none no-pd">
				<div className="main-left-sidebar no-margin">
					<div className="user-data full-width">
						<div className="user-profile">
							<div className="username-dt">
								<div className="usr-pic">
									<img src={users.avatar} alt=""/>
								</div>
							</div>
							<div className="user-specs">
								<h3>{users.name}</h3>
								<span>{users.position}</span>
							</div>
						</div>
						<ul className="user-fw-status">
							<li>
								<h4>Following</h4>
								<span>{users.following}</span>
							</li>
							<li>
								<h4>Followers</h4>
								<span>{users.userFollow}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
	    )
  	}
}
