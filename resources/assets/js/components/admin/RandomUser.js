import React, {Component} from 'react';
import {get} from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import TableRowWorkSpace from './TableRowWorkSpace';
import Nav from '../auth/navbar';
import SideBar from '../auth/sidebar';

class RandomUser extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            value: '',
            workspace: '',
            results: '',
        };

        this.updateState = this.updateState.bind(this);
    }

    componentDidMount()
    {
        get('/workspaces').then(response => {
            this.setState({ workspace: response.data });
        })

    }

    updateState(newlist)
    {
        this.setState({results :newlist});
    }

    tabRow()
    {
        if (this.state.workspace instanceof Array) {
            return this.state.workspace.map((workspace, i) => {
                return <TableRowWorkSpace obj={workspace} key={i} newlist={this.updateState} />;
            })
        }
    }
    
    render()
    {
       const { results} = this.state;

        return (
            <div>
                <Nav link="Logout" />  
                <SideBar />
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav col-md-12">
                        {this.tabRow()}
                        </ul>
                    </div>
                </nav>
                <div>
                    {(() => {
                        if (this.state.results === '') {
                            return   <div> Please choose workspace  </div> ;
                        }  
                    else
                        return (
                            <Table celled striped>
                                <Table.Header>
                                    <Table.HeaderCell>CODE ID</Table.HeaderCell>
                                    <Table.HeaderCell>NAME</Table.HeaderCell>
                                    <Table.HeaderCell>AVARTAR</Table.HeaderCell>
                                </Table.Header>
                                <Table.Body>
                                    {results.map(result =>
                                    (<Table.Row key={result.id}>
                                        <Table.Cell>{result.code_id}</Table.Cell>
                                        <Table.Cell>{result.name}</Table.Cell>
                                        <Table.Cell><img className="thumb"  src={result.avatar} /></Table.Cell>
                                    </Table.Row>),
                                )}
                                </Table.Body>
                            </Table>
                        )
                    })()}
                </div>
            </div>
        )
    }
}

export default RandomUser;
