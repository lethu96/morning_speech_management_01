
import React, {Component} from 'react';
import {browserHistory, Link} from 'react-router-dom';


class UpdatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      error:''
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let current_url = window.location.href;
    let current_id = current_url.split("/").pop();
    axios.get('http://127.0.0.1:8000/posts/' + current_id)
    .then(response=> {
      this.setState({ title: response.data.title, content: response.data.content});
    })
  }

  handleChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleChangeContent(e) {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const post = {
      title: this.state.title,
      content: this.state.content,
    }
    let uri = 'http://127.0.0.1:8000/posts/'+this.props.obj.id;
    axios.put(uri, post).then((response) => {
      this.props.history.push('/list-post');
    }).catch(error => {
      if (error.response) {
        this.setState({ error: error.response.data.errors });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Update Post</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/list-post" className="btn btn-success">Return List Post</Link>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} >
          <div >{this.state.id}</div>
          <div className="form-group">
            <label>Post Title </label>
            <input type="text"
            className="form-control"
            value={this.state.title}
            onChange={this.handleChangeTitle} />
            <p className="help-block" >{this.state.error.title} </p>
          </div>
          <div className="form-group">
            <label name="product_body">post content</label>
            <textarea className="form-control"
            onChange={this.handleChangeContent} value={this.state.content}></textarea>
            <p className="help-block" >{this.state.error.content} </p>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    )
  }
}
export default UpdatePost;
