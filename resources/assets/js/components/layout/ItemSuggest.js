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
                    <h4>{this.props.obj.name}</h4>
                    <span>{this.props.obj.position.name}</span>
                </div>
                <span><i className="fa fa-plus"></i></span>
            </div>
        );
    }
}
export default ItemSuggest;