import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import {get, post} from 'axios';
import PopupOneUser from './PopupOneUser';
import ItemUserPick from './ItemUserPick';


export default class DayOfCampaign extends React.Component {
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

    updateStatePopup(statePopup) {
        this.setState({
            showPopup: statePopup
        });
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
        .then(
            (response) => {window.location.href = `/detail-campaign/${this.props.campaignId}`}
        );
    }

    render() {
    
        return (
            <Table.Row key={this.props.obj.id}>
                <Table.Cell>{this.props.obj}</Table.Cell>
                <Table.Cell><button onClick={this.showPopup} type = "submit" className="btn btn-item choose-user" >Add User</button></Table.Cell>
                <Table.Cell>
                    {this.state.users ?
                        this.state.users
                    : <input value="Not posts" className="btn btn-item no-post" />
                    }
                </Table.Cell>
                <Table.Cell><input className="post-uncheck"  value="Uncheck"/></Table.Cell>
                { this.state.showPopup ? 
                    <PopupOneUser
                        closePopup={this.showPopup.bind(this)}
                        updateState={users=> this.updateState(users)}
                    />
                    : null
                }
            </Table.Row>
        );
    }
}
