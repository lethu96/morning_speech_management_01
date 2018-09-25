import React, { Component } from 'react';
import { Link, browserHistory, Image } from 'react-router-dom';
import { get } from 'axios';
import swal from 'sweetalert';

class TopPost extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="job-info">
                <div className="job-details">
                    <h3><Link to={"/detail-posts/"+this.props.obj.id} > {this.props.obj.title} </Link></h3>
                </div>
                <div>
                    <p>{this.props.obj.total} votes</p>
                </div>
            </div>
        );
    }
}

export default TopPost;
