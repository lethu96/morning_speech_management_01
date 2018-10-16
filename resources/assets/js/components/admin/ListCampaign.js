import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Table, Menu, Icon, Button } from 'semantic-ui-react';
import { get } from 'axios';
import axios from 'axios';
import times from 'lodash.times';
import { Helmet } from 'react-helmet';
import Page from './Page';
import swal from 'sweetalert';
import Nav from '../auth/navbar';
import SideBar from '../auth/sidebar';

const TOTAL_PER_PAGE = 9;

class ListCampaign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campaign: [],
            page: 0,
            totalPages: 0,
        };

        this.incrementPage = this.incrementPage.bind(this);
        this.decrementPage = this.decrementPage.bind(this);
        this.setPage = this.setPage.bind(this);
     }

    componentDidMount() {
        this.getcampaign();
    }

    componentWillReceiveProps({ location = {} }) {
        if (location.pathname === '/list-campaign' && location.pathname !== this.props.location.pathname) {
            this.getcampaign();
        }
    }

    getcampaign() {
        get('/campaigns')
           .then(({ data }) => {
               const totalPages = Math.ceil(data.length / TOTAL_PER_PAGE);
               this.setState({
                    campaign: data,
                    page: 0,
                    totalPages : totalPages,
            });
        });
    }

    setPage(page) {
        return () => {
            this.setState({ page });
        };
    }

    decrementPage() {
        const { page } = this.state;
        this.setState({ page: page - 1 });
    }

    incrementPage() {
        const { page } = this.state;
        this.setState({ page: page + 1 });
    }

    handleSubmit(event) {

        event.preventDefault();
    }

    render() {

        const { campaign, page, totalPages } = this.state;
        const startIndex = page * TOTAL_PER_PAGE;

        return (
            <div>
                <Nav link="Logout" />  
                <SideBar />
                <div className="content-wrapper">
                  <section className="content">
                        <div className="row">
                            <Table celled striped>
                         <Table.Header>
                              <Table.Row>
                                   <Table.HeaderCell>From date</Table.HeaderCell>
                                   <Table.HeaderCell>To date</Table.HeaderCell>
                                   <Table.HeaderCell> ACTION </Table.HeaderCell>
                              </Table.Row>
                         </Table.Header>
                         <Table.Body>
                              {campaign.slice(startIndex, startIndex + TOTAL_PER_PAGE).map(campaign =>
                              (    
                                   <Table.Row key={campaign.id}>
                                        <Table.Cell>{campaign.from_date}</Table.Cell>
                                        <Table.Cell>{campaign.to_date}</Table.Cell>
                                        <Table.Cell>
                                             <form onSubmit={this.handleSubmit}>
                                                  <Link to={"/detail-campaign/" + campaign.id} className="btn edit">Edit</Link>
                                                  <input type="submit" value="Delete" className="btn delete"/>
                                             </form>
                                        </Table.Cell>
                                   </Table.Row>),
                              )}
                         </Table.Body>
                         <Table.Footer>
                              <Table.Row>
                                   <Table.HeaderCell colSpan={6}>
                                        <Menu floated="right" pagination>
                                            {page !== 0 && <Menu.Item as="a" icon onClick={this.decrementPage}>
                                                <i className="fa fa-chevron-left" />
                                            </Menu.Item>}
                                                {times(totalPages, n =>
                                                    (<Menu.Item as="a" key={n} active={n === page} onClick={this.setPage(n)}>
                                                {n + 1}
                                            </Menu.Item>),
                                            )}
                                             {page !== (totalPages - 1) && <Menu.Item as="a" icon onClick={this.incrementPage}>
                                                <i className="fa fa-chevron-right" />
                                            </Menu.Item>}
                                        </Menu>
                                    </Table.HeaderCell>
                               </Table.Row>
                            </Table.Footer>
                    </Table>
                        </div>
                  </section>
                </div>
            </div>
        );
    }
}

export default ListCampaign;
