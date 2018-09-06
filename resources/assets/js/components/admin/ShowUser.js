import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TableRowUser from './TableRowUser';
import {browserHistory} from 'react-router';


class ShowUser extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', user: ''};
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/users').then(response => {
      this.setState({ user: response.data });
    })
  }

  updateState(newlist) {
    this.setState({user :newlist});
  }

  tabRow() {
    if (this.state.user instanceof Array) {
      return this.state.user.map((user, i) => {
        return <TableRowUser obj={user} key={i} newlist ={this.updateState}/>;
      })
    }
  }

  render()
  {
    return (
      <div>
        <h1> List User</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-user" className="btn btn-success">Create User</Link>
          </div>
        </div><br />
        <table className="table table-hover">
          <thead>
            <tr>
              <th>CODE ID</th>
              <th>NAME</th>
              <th>CARD NUMBER</th>
              <th>GENDER</th>
              <th>POSITION</th>
              <th>ROLE</th>
              <th>AVATAR</th>
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
export default ShowUser;
