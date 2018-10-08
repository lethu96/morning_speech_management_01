import React, {Component} from 'react';
import Header from './Header';
import {browserHistory} from 'react-router';
import { get, post } from 'axios';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
import ReactTags from 'react-tag-autocomplete';

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            error:'',
            isButtonDisabled: false,
            tags: [],
            suggestions: []
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.suggest();
    }

    componentWillReceiveProps({ location = {} }) {
        if (location.pathname === '/create-post' && location.pathname !== this.props.location.pathname) {
            this.suggest();
        }
    }

    suggest() {
        get('/post-tag')
        .then(({ data }) => {
            this.setState({
                suggestions: data,
            });
        });
    }
    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        })

    }

    handleChange(value) {
        this.setState({ text: value })
    }

    handleDelete (i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
    }
 
    handleAddition (tag) {
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags })
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = new FormData();
        
        var arrayTag = [];
        const tags = this.state.tags;


        tags.map(result =>{
            arrayTag.push(result.id);
        });

        data.append('title', this.state.title)
        data.append('content', this.state.text)
        data.append('tag_id', arrayTag)

        post('/posts', data)
        .then(
            (response) => {this.props.history.push("/user-posts");}
        )
        .catch(error => {
            if (error.response) {
                this.setState({ error: error.response.data.errors});            }
        });
    }

    render() {

        return (
            <div> 
                <Header />       
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="row">
                                            <div className="form-group">
                                                <label className="label-post">Title</label>
                                                <input value={this.state.title} type="text" className="form-control" onChange={this.handleChangeTitle} />
                                                <label className="error" >{this.state.error.title} </label>
                                            </div>
                                        </div>
                                    </div>
                                    <ReactTags className="my-css-class"
                                        tags={this.state.tags}
                                        suggestions={this.state.suggestions}
                                        handleDelete={this.handleDelete.bind(this)}
                                        handleAddition={this.handleAddition.bind(this)} />
                                    <div className="row">
                                        <label className="label-post">Content</label>
                                    </div>
                                        <ReactQuill value={this.state.text} onChange={this.handleChange} />
                                        <label className="error" >{this.state.error.content} </label>
                                    <br />
                                    <div className="form-group">
                                        <button type = "submit" className="btn create-post" >Add Post</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div> 
                    </div>
                </main>
            </div>  
        )
    }
}

export default CreatePost;
