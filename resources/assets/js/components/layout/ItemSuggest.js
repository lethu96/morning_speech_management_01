import React, { Component } from 'react';
import { Link, browserHistory, Image } from 'react-router-dom';
import { get } from 'axios';
import swal from 'sweetalert';

class ItemSuggest extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
            return (
            <div className="suggestion-usd">
                <img src={this.props.obj.avatar} alt=""/>
                <div className="sgt-text">
                    <h4><Link to={"/user-detail/" + this.props.obj.id}>{this.props.obj.name}</Link></h4>
                    <span>{this.props.obj.position.name}</span>
                </div>
            </div>
        );
    }
}
export default ItemSuggest;