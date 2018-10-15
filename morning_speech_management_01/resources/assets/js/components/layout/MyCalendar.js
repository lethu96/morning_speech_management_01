import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import { get } from 'axios';
import {Link } from 'react-router-dom';
import moment from 'moment';
import ItemCalendar from './ItemCalendar';

class MyCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calendars: [],
        };
    }

    componentDidMount() {
        this.getMyCalendar();
    }

    updateState(newlist) {
        this.setState({calendars: newlist});
    }

    getMyCalendar() {
        get('/my-calendar')
        .then(({ data }) => {
            this.setState({
                calendars: data,
            });
        });
    }

    showItem() {
        if (this.state.calendars instanceof Array) {
            return this.state.calendars.map((calendar, i) => {
                return <ItemCalendar obj={calendar} key={i} newlist={this.updateState} />;
            })
        }
    }

    render() {

        return (
                <div className="widget widget-portfolio">
                    <h5 className="healcode-title-text">My Calendar </h5>
                    <div className="table-type-1 schedule responsive-table">
                        <table>
                            <tbody>
                             {this.showItem()}
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }
}

export default MyCalendar;
            