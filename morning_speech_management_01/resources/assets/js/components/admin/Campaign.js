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
import CreateCampaign from './CreateCampaign';

const TOTAL_PER_PAGE = 10;

class Campaign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
     }

    componentDidMount() {
    }

    componentWillReceiveProps({ location = {} }) {
    }

    handleSubmit(event) {
    }

    render() {

        return (
            <div>
                <Nav link="Logout" />  
                <SideBar />
                <CreateCampaign />
               </div>
            );
        }
    }

export default Campaign;
