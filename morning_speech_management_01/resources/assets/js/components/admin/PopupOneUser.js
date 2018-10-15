import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Container, Input, Form, Radio, Table, Checkbox } from 'semantic-ui-react';
import { get, post } from 'axios';
import PickUser from './PickUser';

export default class PopupOneUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: '',
            position: '',
            positionId: '',
            workSpace: '',
            workspaceId: '',
            result: '',
            updateUser: [],
        };

        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangePositionId = this.handleChangePositionId.bind(this);
        this.handleChangeWorkSpaceId = this.handleChangeWorkSpaceId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeGender(e) {
        this.setState({
            gender: e.target.value
        })
    }

    handleChangePositionId(e) {
        this.setState({
            positionId: e.target.value
        })
    }

    handleChangeWorkSpaceId(e) {
        this.setState({
            workspaceId: e.target.value
        })
    }

    componentDidMount() {
        get('/positions').then(response => {
            this.setState({ position: response.data });
        })

        get('/workspaces').then(response => {
            this.setState({ work_space: response.data });
        })
    }

    showPosition() {
        if (this.state.position instanceof Array) {
            return this.state.position.map(function (position) {
                return (<option key={position.id} value={position.id}>{position.name}</option>);
            })
        }
    }


    showWorkSpace() {
        if (this.state.work_space instanceof Array) {
            return this.state.work_space.map(function (work_space) {
                return (<option key={work_space.id} value={work_space.id}>{work_space.name}</option>);
            })
        }
    }

    handleSubmit(event)
    {
        event.preventDefault();
         if (this.state.gender.trim() != '' || this.state.positionId.trim() != '' ||  this.state.workspaceId.trim() != '') { 
                post('/filter', {
                numberItem: this.props.numberItem,
                gender: this.state.gender,
                positionId: this.state.positionId,
                workspaceId: this.state.workspaceId,
            })
            .then( (response) => {
                this.setState(() => ({ result : response.data }));
            })  
        }
    }
    handleAddUser() {

        const id = [].concat(this.state.updateUser, this.refs.id.value);

        this.setState({ updateUser: id })

        this.props.updateState(this.state.updateUser)
        
    }

    render() {
    
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className="popup-close"> <button onClick={this.props.closePopup}><i className="fa fa-times-circle"></i></button> </div>
                    <form onSubmit={this.handleSubmit} className="form-update-user">
                    <div className="row">
                        <div className="col-md-4">
                            <label>Gender</label>
                            <div className="dropdown">
                                <select value={this.state.gender} className="form-control" onChange={this.handleChangeGender}>
                                    <option value="">---Option---</option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label>Position </label>
                            <div className="dropdown">
                                <select value={this.state.positionId} className="form-control" onChange={this.handleChangePositionId}>
                                    <option value="">---Option---</option>
                                    {this.showPosition()}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4 workspaces">
                                <label>Workspaces </label>
                                <div className="dropdown">
                                    <select value={this.state.workspaceId} className="form-control" onChange={this.handleChangeWorkSpaceId}>
                                        <option value="">---Option---</option>
                                        {this.showWorkSpace()}
                                    </select>
                                </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <button type = "submit" className="btn-filter" >Filter</button>
                        </div>
                    </div>
                    <div className="row" className="result-filter">
                     { this.state.result ?
                        this.state.result.map(user =>
                            (
                            <div key={user.id}>

                                <form onSubmit={this.handleAddUser.bind(this)} className="form-result-filter">
                                   <div className="col-md-12">
                                        <div className="col-md-4">
                                             <img className="thumb"  src={user.avatar} />
                                        </div>
                                        <div className="col-md-4">
                                            <label>{user.name} </label>
                                        </div>
                                        <div className="col-md-4"> 
                                            <input type="submit" value="Choose" className="btn-choose"/>
                                        </div>
                                        <input className=" hidden" value= {user.id} ref="id" />
                                   </div>
                                </form>
                            </div>),
                        )
                      : null
                    }   
                    </div>
                </form>
                </div>
            </div>
        );
    }
}
