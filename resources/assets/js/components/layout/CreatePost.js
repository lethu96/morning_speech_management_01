import React, {Component} from 'react';
import Header from './Header';
import {browserHistory} from 'react-router';
import { post } from 'axios';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
import { translate, Trans } from 'react-i18next';

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            error:'',
            isButtonDisabled: false,
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        })

    }

    handleChange(value) {
        this.setState({ text: value })
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = new FormData();
        data.append('title', this.state.title)
        data.append('content', this.state.text)

        post('/posts', data)
        .then(
            (response) => {this.props.history.push('/user-posts');}
        )
        .catch(error => {
            if (error.response) {
                this.setState({ error: error.response.data.errors});
            }
        });
    }

    render() {

        const { t, i18n } = this.props;

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
                                                <label className="help-block" >{this.state.error.title} </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label className="label-post">{t('content')}</label>
                                    </div>
                                        <ReactQuill value={this.state.text} onChange={this.handleChange} />
                                        <label className="help-block" >{this.state.error.content} </label>
                                    <br />
                                    <div className="form-group">
                                        <button type = "submit" className="btn create-post" >{t('add-post')}</button>
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
