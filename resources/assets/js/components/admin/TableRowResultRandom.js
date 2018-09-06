
import React, { Component } from 'react';
import { Link, browserHistory, Image } from 'react-router-dom';
import swal from 'sweetalert';


class TableRowResultRandom extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <ul>
        <li>
          {this.props.obj.code_id}
        </li>
        <li>
          {this.props.obj.name}
        </li>
        <li>
          {this.props.obj.card_number}
        </li>
      </ul>
    );
  }
}
export default TableRowResultRandom;
