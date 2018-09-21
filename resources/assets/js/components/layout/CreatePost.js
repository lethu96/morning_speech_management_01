import React, {Component} from 'react';
import Header from './Header';
import {browserHistory} from 'react-router';
import { post } from 'axios';
import ReactDOM from 'react-dom';
import { EditorState, ContentState, convertFromRaw, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';


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
        this.setDomEditorRef = ref => this.domEditor = ref;
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        })

    }
    

    onEditorStateChange(e) {
        this.setState ({
          title: e.target.value
        })
    };


       componentDidMount() {
    if(this.props.text) {
      const html = `${this.props.text}`;
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);
        this.setState({ editorState, });
      }
    }

    this.domEditor.focusEditor();
  }

    handleSubmit(e) {
        e.preventDefault();
        let data = new FormData();
        data.append('title', this.state.title)
        data.append('content', this.state.editorState)

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
                                        ref={this.setDomEditorRef}
                                        editorState={editorState}
                                        wrapperClassName="rte-wrapper"
                                        editorClassName="rte-editor"
                                        onChange={this.onChange}
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
