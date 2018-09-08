import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TableRowRaking from './TableRowRaking';
import {browserHistory} from 'react-router';


class Ranking extends Component {
  constructor(props) {
      super(props);
      this.state = {value: '', ranking: ''};
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/ranks').then(response => {
      this.setState({ ranking: response.data });
    })
  }

  tabRow() {
    if (this.state.ranking instanceof Array) {
      return this.state.ranking.map((ranking, i) => {
        return <TableRowRaking obj={ranking} key={i}/>;
      })
    }
  }

  render() {
    return (
      <div>
        <h1> Ranking Of This Month</h1>
        <table className="table table-hover">
            <thead>
              <tr>
                <th>CODE ID</th>
                <th>NAME</th>
                <th>TITLE POST</th>
                <th>VOTE UP</th>
                <th>AVATAR</th>
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
export default Ranking;
