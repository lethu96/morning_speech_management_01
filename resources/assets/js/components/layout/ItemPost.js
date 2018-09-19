import React, { Component } from 'react';
import { Link, browserHistory, Image } from 'react-router-dom';
import { get } from 'axios';
import swal from 'sweetalert';

class ItemPost extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            checkVote :'',
        };
        this.voteUp = this.voteUp.bind(this);
    }
    componentDidMount() {
        let vote = this.props.obj.checkVote;
        this.setState({
            checkVote: vote
        });
        console.log(this.state.checkVote);
    }

    voteUp() {
        this.setState(prevState => ({
            checkVote: !prevState.checkVote
        }));
    }

    render()
    {
        return (
            <div className="posts-section">
                <div className="post-bar">
                    <div className="post_topbar">
                        <div className="usy-dt">
                            <img src={this.props.obj.user.avatar} alt=""/>
                            <div className="usy-name">
                                <h3>{this.props.obj.user.name}</h3>
                                <span><img src="images/clock.png" alt=""/>{this.props.obj.created_at}</span>
                            </div>
                        </div>
                    </div>
                    <div className="epi-sec">
                        <ul className="descp">
                            <li><img src="images/icon9.png" alt=""/><span>Work Space</span></li>
                        </ul>
                        <ul className="bk-links">
                            <li onClick={this.voteUp} className={this.state.checkVote ? 'vote' : 'unvote'}><i className="fa fa-hand-o-up"></i></li>
                        </ul>
                    </div>
                    <div className="job_descp">
                        <h3>{this.props.obj.title}</h3>
                        <ul className="job-dt">
                        </ul>
                        <p>{this.props.obj.content}<Link to={"/detail-posts/"+this.props.obj.id} > view mores </Link></p>
                    </div>
                    <div className="job-status-bar">
                        <ul className="like-com">
                            <li>
                                <a href="#"  className="com"><i className="fa fa-heart"></i> Vote up {this.props.obj.vote_count} </a>
                                
                            </li> 
                            <li><a href="#" title="" className="com"><img src="images/com.png" alt=""/> Comment {this.props.obj.comments_count}</a></li>
                        </ul>
                        <a><i className="fa fa-eye"></i>Views 50</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemPost;