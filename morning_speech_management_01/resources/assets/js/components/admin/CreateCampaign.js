import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import { get, post } from 'axios';
import { Table, Menu, Icon, Button, Form } from 'semantic-ui-react';
import Nav from '../auth/navbar';
import SideBar from '../auth/sidebar';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import Page from './Page';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar  from './Calendar';

class CreateCampaign extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            startDate: moment(),
            toDate: moment(),
            error : '',
            calendar: '',
            isButtonDisabled: false,
            campaignId:'',
        };

        this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        this.handleChangeToDate = this.handleChangeToDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeStartDate(e) {
        this.setState({
            startDate: e.target.value
        })
    }
    
    handleChangeToDate(e) {
        this.setState({
            toDate: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = new FormData();
        data.append('from_date', this.state.startDate)
        data.append('to_date', this.state.toDate)

        post('/campaigns', data)
        .then(
            (response) => {
                this.setState({campaignId: response.data});
                get('/campaign/' + response.data)
                .then((response) =>{
                    this.setState({
                        calendar: response.data,
                        error : '',
                    });
                })
            }
        )
        .catch(error => {
            if (error.response) {
                this.setState({ error: error.response.data.errors});
            }
        });
    }

    render()
    {
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content">
                        <div className="row">
                            <Table celled striped>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Start Date</Table.HeaderCell>
                                <Table.HeaderCell>To Date</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>   
                           <Table.Row>
                                <Table.Cell>

                                    <input type="date" value={this.state.startDate} className="form-control" onChange={ this.handleChangeStartDate} />
                                   
                                    <label className="error" >{this.state.error.from_date} </label>
                                </Table.Cell>
                                <Table.Cell>
                                <input type="date" value={this.state.toDate} className="form-control" onChange={this.handleChangeToDate} />
                                    
                                    <label className="error" >{this.state.error.to_date} </label>
                                </Table.Cell>
                                <Table.Cell>
                                    <form onSubmit={this.handleSubmit}>
                                        <input type="submit" value="submit" className="btn btn-success"/>
                                    </form>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                        </div>
                    </section>
                </div>
                { this.state.calendar ? 
                    <Calendar
                        campaignId={this.state.campaignId}
                        calendar={this.state.calendar}
                    />
                  : null
                }
            </div>
        )
    }
}

export default CreateCampaign;
