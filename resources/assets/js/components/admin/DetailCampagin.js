import React, {Component} from 'react';
import { get, post, put } from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Table, Menu, Icon, Button } from 'semantic-ui-react';
import times from 'lodash.times';
import { Helmet } from 'react-helmet';
import Page from './Page';
import Nav from '../auth/navbar';
import SideBar from '../auth/sidebar';
import ItemCalendar from './ItemCalendar';
import Ranking from './Ranking';
import Calendar from './Calendar';
import DayOfCampaign from  './DayOfCampaign';

class DetailCampagin extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            calendars: '',
            fromDate: '',
            toDate: '',
            ranks: '',
            campaignId: '',
            dayofCampaign: '',
        };
    }

    componentDidMount()
    {
        let current_url = window.location.href;
        let current_id = current_url.split("/").pop();

        this.setState({
            campaignId: current_id
        })

        get('/campaigns/' + current_id)
        .then(response=> {
            this.setState({
                fromDate: response.data.from_date,
                toDate: response.data.to_date,
                calendars: response.data.calendars
            });
        })

        get('/campaign/' + current_id)
        .then((response) =>{
            this.setState({
                dayofCampaign: response.data,
            });
        })

        get('/rank-of-campaign/' + current_id)
        .then(response=> {
            this.setState({
                ranks: response.data,
            });
        })

    }
    showCalendar() {
        if (this.state.calendars instanceof Array) {
            return this.state.calendars.map((calendar, i) => {
                return <ItemCalendar obj={calendar} key={i}/>;
            })
        }
    }

    showRank() {
        if (this.state.ranks instanceof Array) {
            return this.state.ranks.map((rank, i) => {
                return <Ranking obj={rank} key={i}/>;
            })
        }
    }
    AddUserForCampaign() {
        if (this.state.dayofCampaign instanceof Array) {
            return this.state.dayofCampaign.map((day, i) => {
                return <DayOfCampaign obj={day} key={i}/>;
            })
        }
    }

    render()
    {
        return (
            <div> 
                <Nav link="Logout" />  
                <SideBar />
                <div className="content-wrapper">
                    <section className="content">
                        <div className="row">
                            <Link to='/list-campaign' className="back"> Back To List Campaign </Link>
                            <div className="campaign-date"> To: {this.state.toDate} </div>
                            <div className="campaign-date"> Campaign From: {this.state.fromDate} </div>
                            
                            <Table celled striped>
                                 <Table.Header>
                                      <Table.Row>
                                           <Table.HeaderCell>Date</Table.HeaderCell>
                                           <Table.HeaderCell>User name</Table.HeaderCell>
                                           <Table.HeaderCell collapsing>Post</Table.HeaderCell>
                                           <Table.HeaderCell>Action</Table.HeaderCell>
                                      </Table.Row>
                                 </Table.Header>
                                <Table.Body>
                                {(() => {
                                    if (this.state.calendars.length === 0) {
                                        return  this.AddUserForCampaign()
                                    }
                                    else
                                        return this.showCalendar()
                                })()}
                                </Table.Body>
                            </Table>
                            <div className="text-ranking" > Ranking Of Campaign </div>
                            <Table celled striped>
                                 <Table.Header>
                                      <Table.Row>
                                           <Table.HeaderCell>Code ID</Table.HeaderCell>
                                           <Table.HeaderCell>User name</Table.HeaderCell>
                                           <Table.HeaderCell>Title Post</Table.HeaderCell>
                                           <Table.HeaderCell>Number Vote</Table.HeaderCell>
                                      </Table.Row>
                                 </Table.Header>
                                <Table.Body>
                                    {this.showRank()}
                                </Table.Body>
                            </Table>
                        </div>
                    </section>
                </div>
            </div>  
        )
    }
}

export default DetailCampagin;
