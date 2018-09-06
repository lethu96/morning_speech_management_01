
import React, { Component } from 'react';
import { Link, browserHistory, Image } from 'react-router-dom';
import swal from 'sweetalert';


class TableRowPost extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete('http://127.0.0.1:8000/posts/' + this.props.obj.id)
        .then(
          (response) => {
            axios.get('http://127.0.0.1:8000/posts')
            .then(response => {
              this.setState({ list: response.data });
              this.props.newlist(this.state.list)
            }
          )
        });
        swal("Post has been deleted!", {
          icon: "success",
          timer: 1000,
          buttons:false
        });
      }
    });
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.obj.id}
        </td>
        <td>
          {this.props.obj.user.name}
        </td>
        <td className="infor">
          {this.props.obj.title}
        </td>
        <td>
          {this.props.obj.content}
        </td>
        <td>
          <img className="thumb"  src={this.props.obj.img} />
        </td>
        <td>
          {this.props.obj.video}
        </td>
        <td>
          <form onSubmit={this.handleSubmit}>
            <Link to={"/update-post/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
            <Link to={"/show-post/"+this.props.obj.id} className="btn btn-success"> Show </Link>
            <input type="submit" value="Delete" className="btn btn-danger"/>
          </form>
        </td>
      </tr>
    );
  }
}
export default TableRowPost;
