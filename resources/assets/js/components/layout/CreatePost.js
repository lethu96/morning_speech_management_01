import React, {Component} from 'react';
import Header from './Header';
import {browserHistory} from 'react-router';
import { post } from 'axios';
import ReactDOM from 'react-dom';
import { EditorState, ContentState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';


class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            error:'',
            editorState: EditorState.createEmpty(),
            isButtonDisabled: false
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        })

    }
  //   setEditorContent (text) {
  //   const contentState = ContentState.createFromText(text);
  //   const editorState = EditorState.push(this.state.editorState, contentState);
  //   this.setState({ editorState });  
  // }

    handleSubmit(e) {
        e.preventDefault();
        let data = new FormData();
        data.append('title', this.state.title)
        data.append('editorState', this.state.content)

        post('/api/posts', data)
        .then(
            (response) => {this.props.history.push("/list-post");}
        )
        .catch(error => {
            if (error.response) {
                this.setState({ error: error.response.data.errors});            }
        });
    }

    render() {
        const { editorState } = this.state;
        console.log(editorState);
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
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Title</label>
                                                <input value={this.state.title} type="text" className="form-control" onChange={this.handleChangeTitle} />
                                                <label className="help-block" >{this.state.error.title} </label>
                                            </div>
                                        </div>
                                    </div>
                                        <Editor
                                            editorState={editorState}
                                            onEditorStateChange={editorState => this.setState({ editorState })}
                                        />

                                        <label className="help-block" >{this.state.error.content} </label>
                                    <br />
                                    <div className="form-group">
                                        <button type = "submit" className="btn btn-primary" >Add Post</button>
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
