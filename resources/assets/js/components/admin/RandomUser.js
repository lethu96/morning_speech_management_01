import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TableRowWorkSpace from './TableRowWorkSpace';
import TableRowResultRandom from './TableRowResultRandom';


class RandomUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      workspace: '',
      result:''
      };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/workspaces').then(response => {
      this.setState({ workspace: response.data });
    })
  }

  updateState(newlist) {
    this.setState({result :newlist});
  }

  tabRow() {
    if (this.state.workspace instanceof Array) {
      return this.state.workspace.map((workspace, i) => {
        return <TableRowWorkSpace obj={workspace} key={i} newlist={this.updateState} />;
      })
    }
  }

  resultRandom() {
    if (this.state.result instanceof Array) {
      return this.state.result.map(function (result) {
        return (<div key={result.id} value={result.id}>{result.name}></div>);
      })
    }
  }

  render() {
    return (
    	<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav col-md-12">
              {this.tabRow()}
            </ul>
          </div>
        </nav>
        <div>
        {(() => {
        	if (this.state.result === '') {
	    	return <div></div> ;
	  	}
	  	else
	  		{this.resultRandom()} 
    })()}
    </div>
    </div>
    )
  }
}
export default RandomUser;
