
import React, { Component } from 'react';
import { Link, browserHistory, Image } from 'react-router-dom';
import swal from 'sweetalert';


class TableRowRaking extends Component {
  constructor(props) {
    super(props);
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
          {this.props.obj.title}
        </td>
        <td>
          {this.props.obj.number_vote}
        </td>
        <td>
          <img className="thumb"  src={this.props.obj.avatar} />
        </td>
      </tr>
    );
  }
}
export default TableRowRaking;
