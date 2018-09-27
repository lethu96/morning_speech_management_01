import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import get from 'axios';
import PopupUser from './PopupUser';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: '',
            showPopup: false,
            totalItem: '',
        };
        this.showPopup = this.showPopup.bind(this);
    }

    showPopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    updateState(newlist) {
        this.setState({users: newlist});
    }

    userChoose()
    {
        if (this.state.users instanceof Array) {
            return this.state.users.map((user, i) => {
                return <Table.Cell obj={user} key={i} newlist={this.updateState}/>;
            })
        }
    }

    render() {
    
        return (
            <div>
                <Table celled striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>User</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.calendar.map((result, i) =>
                            (
                                <Table.Row key={result.id}>
                                    <Table.Cell>
                                        {result}
                                    </Table.Cell>
                                </Table.Row>
                            ),
                        )}

                        {
                            this.state.users ? this.userChoose() : null
                        }
                        
                    </Table.Body>
                    <Table.Footer>
                        <button onClick={this.showPopup} type = "submit" className="btn btn-primary" >Add User</button>
                    </Table.Footer>
                </Table>
                { this.state.showPopup ? 
                    <PopupUser
                        numberItem = {this.props.calendar.length}
                        closePopup={this.showPopup.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
}
