import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ItemCalendar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            checked :'',
        };

        this.checkPost = this.checkPost.bind(this);
    }

    componentDidMount() {
        let uncheck = this.props.obj.checked;
        this.setState({
            checked: uncheck
        });    
    }

    checkPost() {

        this.setState(prevState => ({
            checked: !prevState.checked
        }));

        const data = {
            checked: 1,
            confirm: 1,
        }

        let uri = '/calendars/' + this.props.obj.id;

        axios.put(uri, data)
        .then(
            (response) => {}
        )
    }

    render()
    {
        return (
            <Table.Row key={this.props.obj.id}>
                <Table.Cell>{this.props.obj.date}</Table.Cell>
                <Table.Cell>{this.props.obj.users.name}</Table.Cell>
                
                {(() => {
                if (this.props.obj.posts) {
                    return (
                        <Table.Cell collapsing> <Link id="linkpost" to={'/detail-posts/' + this.props.obj.posts.id}> {this.props.obj.posts.title}</Link></Table.Cell>    
                    ) 
                }  
                else
                    return (
                        <input value="Not post yet" className="btn btn-item no-post" /> 
                    )
                })()}
                <Table.Cell>
                {(() => {
                if (this.props.obj.posts) {
                    if(this.props.obj.checked) {
                        return (
                        <input className={this.state.checked ? 'btn post-checked' : 'btn post-uncheck'}  value={this.state.checked ? 'Checked' : 'Uncheck'}/>
                    ) 
                    }else
                        return  <input onClick= {this.checkPost} className={this.state.checked ? 'btn post-checked' : 'btn post-uncheck'}  value={this.state.checked ? 'Checked' : 'Uncheck'}/>
                }  
                else
                    return (
                        <input className={this.state.checked ? 'btn post-checked' : 'btn post-uncheck'}  value={this.state.checked ? 'btn Checked' : 'Uncheck'}/>
                    )
                })()}
                    
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default ItemCalendar;
