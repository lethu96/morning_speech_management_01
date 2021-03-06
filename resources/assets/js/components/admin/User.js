import React from 'react';
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
import { translate, Trans } from 'react-i18next';

const TOTAL_PER_PAGE = 10;

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            page: 0,
            totalPages: 0,
        };

        this.incrementPage = this.incrementPage.bind(this);
        this.decrementPage = this.decrementPage.bind(this);
        this.setPage = this.setPage.bind(this);
     }

    componentDidMount() {
        this.getUsers();
    }

    componentWillReceiveProps({ location = {} }) {
        if (location.pathname === '/users' && location.pathname !== this.props.location.pathname) {
            this.getUsers();
        }
    }

    getUsers() {
        get('/users')
           .then(({ data }) => {
               const totalPages = Math.ceil(data.length / TOTAL_PER_PAGE);
               this.setState({
                    users: data,
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
        swal({
            title: 'Are you sure?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
               if (willDelete) {
                        axios.delete('/users/' + this.props.id)
                        .then(
                            (response) => {
                                get('/users')
                                .then(response => {
                                   this.setState({ users: response.data });
                                }
                            )
                        });
                        swal('Users has been deleted!', {
                            icon: 'success',
                            timer: 1000,
                            buttons:false
                        }
                    );
                }
            }
        );
    }

    render() {

        const { users, page, totalPages } = this.state;
        const startIndex = page * TOTAL_PER_PAGE;
        const { t, i18n } = this.props;

        return (
            <div>
                <Nav link="Logout" />  
                <SideBar />
                <Link to='/add-user' className="btn btn-success">Create Users</Link>
                <Page title="Users">
                    <Helmet>
                         <title>Users</title>
                    </Helmet>

                    <Table celled striped>
                         <Table.Header>
                              <Table.Row>
                                   <Table.HeaderCell>{t('name')}</Table.HeaderCell>
                                   <Table.HeaderCell>{t('email')}</Table.HeaderCell>
                                   <Table.HeaderCell>{t('phone')}</Table.HeaderCell>
                                   <Table.HeaderCell>{t('code')}Code </Table.HeaderCell>
                                   <Table.HeaderCell>{t('card_number')}</Table.HeaderCell>
                                   <Table.HeaderCell>{t('avatar')}</Table.HeaderCell>
                                   <Table.HeaderCell>{t('action')}</Table.HeaderCell>
                              </Table.Row>
                         </Table.Header>
                         <Table.Body>
                              {users.slice(startIndex, startIndex + TOTAL_PER_PAGE).map(user =>
                              (    
                                   <Table.Row key={user.id}>
                                        <Table.Cell>{user.name}</Table.Cell>
                                        <Table.Cell>{user.email}</Table.Cell>
                                        <Table.Cell>{user.phone_contact}</Table.Cell>
                                        <Table.Cell>{user.code_id}</Table.Cell>
                                        <Table.Cell>{user.card_number}</Table.Cell>
                                        <Table.Cell><img className="thumb"  src={user.avatar} /></Table.Cell>
                                        <Table.Cell>
                                             <form onSubmit={this.handleSubmit}>
                                                  <Link to={'/update-user/' + user.id} className="btn btn-primary">Edit</Link>
                                                  <input type="submit" value="Delete" className="btn btn-danger"/>
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
                                                <Icon name="left chevron" />
                                            </Menu.Item>}
                                                {times(totalPages, n =>
                                                    (<Menu.Item as="a" key={n} active={n === page} onClick={this.setPage(n)}>
                                                {n + 1}
                                            </Menu.Item>),
                                            )}
                                             {page !== (totalPages - 1) && <Menu.Item as="a" icon onClick={this.incrementPage}>
                                                <Icon name="right chevron" />
                                            </Menu.Item>}
                                        </Menu>
                                    </Table.HeaderCell>
                               </Table.Row>
                            </Table.Footer>
                        </Table>
                   </Page>
               </div>
            );
        }
    }

export default Users;
