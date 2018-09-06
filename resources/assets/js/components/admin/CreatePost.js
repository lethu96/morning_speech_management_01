import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

class CreatePost extends Component {
  constructor(props)
    {
      super(props);
      this.state = {
          title: '',
          content: '',
          error:'',
          isButtonDisabled: false
      };
      this.handleChangeTitle = this.handleChangeTitle.bind(this);
      this.handleChangeContent = this.handleChangeContent.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChangeContent(e) {
    this.setState({
      content: e.target.value
    })
    console.log(this.state.content);
  }

    
  handleChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = new FormData();
    data.append('title', this.state.title)
    data.append('content', this.state.content)
    axios.post('http://127.0.0.1:8000/posts', data)
    .then(
      (response) => {browserHistory.push('/posts');}
    )
    .catch(error => {
      if (error.response) {
        this.setState({ error: error.response.data.errors , isButtonDisabled: false});
      }
    });
    this.setState({isButtonDisabled: true});
	}

  render() {
    return (
	    <div>
	      <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Title</label>
                <input value={this.state.title} type="text" className="form-control" onChange={this.handleChangeTitle} />
                <p className="help-block" >{this.state.error.title} </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Content</label>
                  <JoditEditor
                      editorRef={this.setRef}
                      value={this.state.content}
                      config={this.config}
                      onChange={this.updateContent}
                  />
              </div>
            </div>
          </div>
            <br />
            <div className="form-group">
              <button type = "submit" className="btn btn-primary" disabled={this.state.isButtonDisabled}>Add Post</button>
            </div>
        </form>
	    </div>
    )
  }
}
export default CreatePost;
