import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import { get, post } from 'axios';
import { Form } from 'semantic-ui-react';
import Header from './Header';
import ItemComment from './ItemComment';


export default class DetailPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	id: '',
            title: '',
            content: '',
            comment:'',
            user: {},
            itemComment: '',
            error: '',
        };
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
	    let current_url = window.location.href;
        let current_id = current_url.split("/").pop();

        get('/posts/' + current_id).then(response => {
            this.setState({id: response.data.id, title: response.data.title, content: response.data.content, user: response.data.user});
        	console.log(this.state.user);
        })
        get('/comment-of-post/' + current_id)
        .then(({ data }) => {
            this.setState({
                itemComment: data,
            });
        });
	}

	handleChangeComment(e) {
		this.setState ({
			comment: e.target.value
		})

	}

	handleSubmit (event) {
		event.preventDefault();
        let data = new FormData();
        data.append('content', this.state.comment)
        data.append('post_id', this.state.id)

        post('/add-comment', data)
        .then(
            (response) => {
            	axios.get('/comment-of-post/'+this.state.id)
                        .then(response => {
                        	this.props.history.push("/posts/"+ this.state.id);
                    })
                }
        )
        .catch(error => {
            if (error.response) {
                this.setState({ error: error.response.data.errors});            }
        });
	}

	itemComment() {
		if (this.state.itemComment instanceof Array) {
            return this.state.itemComment.map((item, i) => {
                return <ItemComment obj={item} key={i} newlist ={this.updateState}/>;
            })
        }
	}

    render() {
	    return (
				<div> 
                <Header />       
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row posts-detail">
                                	<div className="posts-section">
						                <div className="post-bar">
						                    <div className="post_topbar">
						                        <div className="usy-dt">
						                            <img src={this.state.user.avatar}  alt=""/>
						                            <div className="usy-name">
						                                <h3>{this.state.user.name}</h3>
						                                <span><img src="images/clock.png" alt=""/>{this.state.created_at}</span>
						                            </div>
						                        </div>
						                    </div>
						                    <div className="epi-sec">
						                        <ul className="descp">
						                            <li><img src="images/icon9.png" alt=""/><span>Work Space</span></li>
						                        </ul>
						                       
						                    </div>
						                    <div className="job_descp">
						                        <h3>{this.state.title}</h3>
						                        <ul className="job-dt">
						                        </ul>
						                        <p>{this.state.content}</p>
						                    </div>
						                    <div className="job-status-bar">
						                        <ul className="like-com">
						                            <li>
						                                <a href="#"  className="com"><i className="fa fa-heart"></i> Vote up 20 </a>
						                                
						                            </li> 
						                            <li><a href="#" title="" className="com"><img src="images/com.png" alt=""/> Comment 15</a></li>
						                        </ul>
						                        <a><i className="fa fa-eye"></i>Views 50</a>
						                    </div>
						                   <div> 
						                   
						                   </div>
						                </div>
						            </div>
						            <div className="post-project-fields">
							            <form onSubmit={this.handleSubmit}>	                                        
				                            <div className="row">
												<div className="col-lg-12">
													<input type="text" name="title" value={this.state.comment} onChange={this.handleChangeComment}/>
													<label className="help-block" >{this.state.error.content}</label>
				                            <br />
												</div>
			                                    	<button type = "submit" className="btn-active" > Comment</button>
											</div>
			                                
			                            </form>
		                            </div>
                                </div>
                                <div className="row"> 
                                	{this.itemComment()}
                                </div>
                            </div>
                        </div> 
                    </div>
                </main>
            </div>  
	    )
  	}

}
