import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router-dom';


class ItemComment extends Component {
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="comment-info">
                    <div className="comment-up-info">
                        <div className="comment-info-user">
                            <div>
                                <img src={this.props.obj.user.avatar} alt=""/>
                            </div>
                            <div>
                                <h3>{this.props.obj.user.name}</h3>
                            </div> 
                        </div>
                        <div className="comment-content">
                        <p>{this.props.obj.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ItemComment;