
import React, { Component } from 'react';
import { Link, browserHistory, Image } from 'react-router-dom';
import swal from 'sweetalert';


class TableRowUser extends Component {
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
        axios.delete('http://127.0.0.1:8000/users/' + this.props.obj.id)
        .then(
          (response) => {
            axios.get('http://127.0.0.1:8000/users')
            .then(response => {
              this.setState({ list: response.data });
              this.props.newlist(this.state.list)
            }
          )
        });
        swal("User has been deleted!", {
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
          {this.props.obj.code_id}
        </td>
        <td>
          {this.props.obj.name}
        </td>
        <td>
          {this.props.obj.card_number}
        </td>
        <td>
          {this.props.obj.gender}
        </td>
        <td>
          {this.props.obj.position.name}
        </td>
        <td>
          {this.props.obj.role}
        </td>
        <td>
          <img className="thumb"  src={this.props.obj.avatar} />
        </td>
        <td>
          <form onSubmit={this.handleSubmit}>
            <Link to={"/update-user/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
            <Link to={"/show-user/"+this.props.obj.id} className="btn btn-success"> Show </Link>
            <input type="submit" value="Delete" className="btn btn-danger"/>
          </form>
        </td>
      </tr>
    );
  }
}
export default TableRowUser;
