import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import { get } from 'axios';
import {Link } from 'react-router-dom';
import moment from 'moment';

class CalendarMs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calendars: [],
        };
        this.calendarNext = this.calendarNext.bind(this);
        this.calendarThisWeek = this.calendarThisWeek.bind(this);
    }

    componentDidMount() {
        this.getCalendar();
    }

    componentWillReceiveProps({ location = {} }) {
        if (location.pathname === '/index' && location.pathname !== this.props.location.pathname) {
            this.getCalendar();
        }
    }

    getCalendar() {
        get('/calendar-of-week')
        .then(({ data }) => {
            this.setState({
                calendars: data,
            });
        });
    }

    calendarNext()
    {
        get('/calendar-of-next-week')
        .then(({ data }) => {
            this.setState({
                calendars: data,
            });
        });
    }

    calendarThisWeek() {
        this.getCalendar();
    }

    render() {

        const {calendars} = this.state;

        return (
            <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                <div className="main-left-sidebar no-margin">
                    <div className="user-data full-width">
                        <div className="healcode-header">
                            <a href="#" className="action_icon print_version"><i className="licon-printer"></i></a>
                            <a href="#" className="action_icon cart_version"><i className="licon-cart"></i></a>
                            <a href="#" className="action_icon my_account_version"><i className="licon-user-lock"></i></a>
                            <h5 className="healcode-title-text">Schedule of week</h5>
                            <div className="date_links">
                                <div className="week_links row">
                                  <span className="healcode-previous previous_week">
                                    <a href="#"  onClick={this.calendarThisWeek}>This Week</a>
                                  </span>

                                  <span className="healcode-next next_week">
                                    <a href="#" onClick={this.calendarNext}>Next Week</a>
                                  </span>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="table-type-1 schedule responsive-table">
                            <table>
                                <tbody>
                                {calendars.map(calendar=> (
                                    <tr key={calendar.id}>
                                        <td >
                                            <div className="flex-row justify-content-between">
                                              <div>{calendar.date}</div>
                                            </div>
                                        </td>
                                        <td data-title="className"><Link className="link-text" to={"/user-detail/" + calendar.users.id}>{calendar.users.name}</Link></td>
                                    </tr>
                                )
                                )}  
                              </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CalendarMs;
            