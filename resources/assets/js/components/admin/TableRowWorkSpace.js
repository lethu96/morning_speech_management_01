
import React, { Component } from 'react';
import { Link, browserHistory, Image } from 'react-router-dom';
import swal from 'sweetalert';


class TableRowWorkSpace extends Component {
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
    .then((willRandom) => {
      if (willRandom) {
        axios.get('http://127.0.0.1:8000/random/' + this.props.obj.id)
        .then(
          (response) => {
            this.setState({ list: response.data });
            this.props.newlist(this.state.list)
        });
        swal(" Random user Success", {
          icon: "success",
          timer: 1000,
          buttons:false
        });
      }
    });
  }

  render() {
    return (
      <li className="nav-item">
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value={this.props.obj.name} className="btn btn-item"/>
        </form>
      </li>
    );
  }
}
export default TableRowWorkSpace;
