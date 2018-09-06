import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TableRowPost from './TableRowPost';


class ShowPost extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', post: ''};
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/posts').then(response => {
      this.setState({ post: response.data });
    })
  }

  updateState(newlist){
    this.setState({post :newlist});
  }

  tabRow() {
    if (this.state.post instanceof Array) {
      return this.state.post.map((post, i) => {
        return <TableRowPost obj={post} key={i} newlist ={this.updateState}/>;
      })
    }
  }

  render() {
    return (
      <div>
        <h1> LIST POST</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-post" className="btn btn-success">Create post</Link>
          </div>
        </div><br />
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>TITLE</th>
              <th>CONTENT</th>
              <th>IMG</th>
              <th>VIDEO</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    )
  }
}
export default ShowPost;
