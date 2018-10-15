import React, {Component} from 'react';
import { Table, Menu, Icon, Button } from 'semantic-ui-react';
import { get } from 'axios';
import times from 'lodash.times';
import { Helmet } from 'react-helmet';
import Page from './Page';
import Nav from '../auth/navbar';
import SideBar from '../auth/sidebar';
import { Link } from 'react-router-dom';

const TOTAL_PER_PAGE = 10;

class Ranking extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Table.Row key={this.props.obj.id}>
                <Table.Cell>{this.props.obj.code_id}</Table.Cell>
                <Table.Cell><Link to={'/user-detail/' + this.props.obj.user_id}>{this.props.obj.name} </Link></Table.Cell>
                <Table.Cell><Link to={'/detail-posts/' + this.props.obj.id} >{this.props.obj.title}</Link></Table.Cell>
                <Table.Cell>{this.props.obj.number_vote}</Table.Cell>
            </Table.Row>
        );
    }
}

export default Ranking;
