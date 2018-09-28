import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import {get, post} from 'axios';
import PopupUser from './PopupUser';
import ItemUserPick from './ItemUserPick';
import {browserHistory} from 'react-router';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: '',
            showPopup: false,
            totalItem: '',
        };
        this.showPopup = this.showPopup.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
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
                return <ItemUserPick obj={user} key={i} newlist={this.updateState}/>;
            })
        }
    }
    handleConfirm(e) {

        e.preventDefault();
        let data = new FormData();
        var arrayUser = [];
        const users = this.state.users;

        this.state.users.map(result =>{
            arrayUser.push(result['id']);
        });

        data.append('date', this.props.calendar)
        data.append('user_id', arrayUser)
        data.append('campaign_id', this.props.campaignId)

        post('/calendars', data)
        this.props.history.push('/detail-campaign' + this.props.campaignId);
    }

    render() {
    
        return (
            <div>

                <Table celled striped className="table-calendar">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Date</Table.HeaderCell>
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
                    </Table.Body>
                    <Table.Footer>
                        <button onClick={this.showPopup} type = "submit" className="btn btn-primary" >Add User</button>
                    </Table.Footer>
                </Table>
                <Table celled striped className="table-calendar">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>User</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.userChoose()}
                    </Table.Body>
                    <Table.Footer>
                    <form onSubmit={this.handleConfirm}>
                    <input type="submit" value="ConFirm" className="btn btn-success"/>
                    </form>
                    </Table.Footer>
                </Table>
                { this.state.showPopup ? 
                    <PopupUser
                        updateState= {users=> this.updateState(users) }
                        numberItem = {this.props.calendar.length}
                        closePopup={this.showPopup.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
}
