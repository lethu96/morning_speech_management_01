import React, { Component } from 'react';
import { Link, browserHistory, Image } from 'react-router-dom';
import { get, post } from 'axios';
import swal from 'sweetalert';
import Popup from './Popup';
import PopupVote from './PopupVote';
import ReadMoreReact from 'read-more-react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const Timestamp = require('react-timestamp');
const rootElement = document.getElementById('reactjs-root');


class ItemPost extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            checkVote :'',
            showPopup: false,
            showUserVote: false,
            listComment: '',
            listUser:'',
        };
        this.voteUp = this.voteUp.bind(this);
        this.PopupVote = this.PopupVote.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
    }
    componentDidMount() {
        let uncom = this.props.obj.checkVote;
        this.setState({
            checkVote: uncom
        });

        get('/comment-of-post/' + this.props.obj.id)
        .then(({ data }) => {
            this.setState({
                listComment: data,
            });
        });

        get('/get-user-vote/' + this.props.obj.id)
        .then(({ data }) => {
            this.setState({
                listUser: data,
            });
        });
    }
    togglePopup() {        
        this.setState({
          showPopup: !this.state.showPopup
        });
    }

    PopupVote() {
        this.setState({
          showUserVote: !this.state.showUserVote
        });
    }    

    voteUp() {
        this.setState(prevState => ({
            checkVote: !prevState.checkVote
        }));
        let data = new FormData();
        data.append('post_id', this.props.obj.id)
        post('/votes', data)
    }

    render()
    {
        const html = ReactHtmlParser(this.props.obj.content);
        return (
            <div className="posts-section">
                <div className="post-bar">
                    <div className="post_topbar">
                        <div className="usy-dt">
                            <img src={this.props.obj.user.avatar} alt=""/>
                            <div className="usy-name">
                                <h3>{this.props.obj.user.name}</h3>
                                <span><img src="/images/clock.png" alt="" className="img-lock"/> <Timestamp time={this.props.obj.created_at} precision={2} /></span>
                            </div>
                            <div className="vote-post">
                                <ul className="like-com">
                                    <li> 
                                        <a onClick={this.voteUp} className={this.state.checkVote ? 'uncom' : 'com'}> <i className="fa fa-heart"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="epi-sec">
                        <ul className="descp">
                            <li><img src="/images/icon9.png" alt=""/><span>{this.props.obj.user.workspace.name} work space</span></li>
                        </ul>
                    </div>
                    <div className="job_descp">
                        <h3>{this.props.obj.title}</h3>
                        <p> {html}<Link to={"/detail-posts/"+this.props.obj.id} > Read mores </Link></p>
                    </div>
                    <div className="job-status-bar">
                        <ul className="like-com">
                            <li onClick={this.PopupVote}> 
                                <a className="com"> <i className="fa fa-group"></i>User vote  {this.props.obj.vote_count}</a>
                            </li>
                            <li onClick={this.togglePopup}><a href="#" title="" className="com"><img src="images/com.png" alt=""/> Comment {this.props.obj.comments_count}</a></li>
                        </ul>
                        <a><i className="fa fa-eye"></i>Views 50</a>
                    </div>
                </div>
                {this.state.showPopup ? 
                  <Popup
                    listComment={this.state.listComment}
                    closePopup={this.togglePopup.bind(this)}
                  />
                  : null
                }
                { this.state.showUserVote ? 
                  <PopupVote
                    listUser={this.state.listUser}
                    closePopup={this.PopupVote.bind(this)}
                  />
                  : null
                }
            </div>
        );
    }
}

export default ItemPost;