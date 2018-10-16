import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class PopupChoosePost extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            selectedPost: '',
            calendar: '',
        }
        this.choose = this.choose.bind(this);
    }

    

    handleChangePost(e) {
        this.setState({
            selectedPost: e.target.value
        })
    }

    choose(){
        const postId = this.state.selectedPost;
        const data = {
            post_id: postId,
            confirm: 1,
        }
        console.log(this.props.calendarId)
        let uri = '/calendars/' + this.props.calendarId;

        axios.put(uri, data)
        .then(
            (response) => {
                axios.get('/my-calendar')
                .then(({ data }) => {
                    
                    this.setState({
                        calendar: data,
                    });

                    window.location.reload(true);
                });
                
            }
        )
        this.props.closePopup(false)
    }

    render() {

    return (

        <div className='popup'>
            <div className='popup_inner'>
            <div className="popup-close"> <button onClick={this.props.closePopup}><i className="fa fa-times-circle"></i></button> </div>
             <div className="col-md-12">
                <div className="form-group">
                    <label className="text-ranking">Choose a Post</label>
                    <div className="dropdown">
                        <select value={this.state.selectedPost} className="form-control" onChange={this.handleChangePost.bind(this)}>
                            <option  value="0">--Option---</option>
                            {this.props.posts.map(post=> (
                                <option key={post.id} value={post.id}>{post.title}</option>
                            )
                        )}
                        </select>
                    </div>
                </div>
                <input onClick = {this.choose} type="submit" value="Choose" className="btn btn-item choose-post"/>
            </div>
            </div>
          </div>
        );
    }
}
