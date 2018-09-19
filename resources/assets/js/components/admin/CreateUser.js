import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import { get, post } from 'axios';
import { Form } from 'semantic-ui-react';
import Nav from '../auth/navbar';
import SideBar from '../auth/sidebar';


class CreateUser extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            code_id : '',
            name : '',
            email :'',
            password : '',
            card_number :'',
            gender :'',
            birth_day :'',
            phone_contact : '',
            opening_date :'',
            close_date : '',
            role : '',
            avatar : '',
            position: '',
            selectedPosition: '1',
            position_id:'',
            company:'',
            company_id:'',
            selectedCompany :'1',
            work_space : '',
            work_space_id : '',
            selectedWorkSpace : '1',
            error :'',
            isButtonDisabled: false
        };
        this.handleChangeCodeId = this.handleChangeCodeId.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeCardNumber = this.handleChangeCardNumber.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangeBirthDay = this.handleChangeBirthDay.bind(this);
        this.handleChangePhoneContact = this.handleChangePhoneContact.bind(this);
        this.handleChangeOpenDate = this.handleChangeOpenDate.bind(this);
        this.handleChangeCloseDate = this.handleChangeCloseDate.bind(this);
        this.handleChangeRole = this.handleChangeRole.bind(this);
        this.handleChangePositionId = this.handleChangePositionId.bind(this);
        this.handleChangeCompanyId = this.handleChangeCompanyId.bind(this);
        this.handleChangeWorkSpaceId = this.handleChangeWorkSpaceId.bind(this);
        this.handleChangeAvatar = this.handleChangeAvatar.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount()
    {
        get('/companys').then(response => {
            this.setState({ company: response.data });
        })
        get('/positions').then(response => {
            this.setState({ position: response.data });
        })

        get('/workspaces').then(response => {
            this.setState({ work_space: response.data });
        })
    }

    handleChangeName(e)
    {
        this.setState({
            name: e.target.value
        })
    }
    
    handleChangeCodeId(e)
    {
        this.setState({
            code_id: e.target.value
        })
    }

    handleChangeEmail(e)
    {
        this.setState({
            email: e.target.value
        })
    }
    
    handleChangeCardNumber(e)
    {
        this.setState({
            card_number: e.target.value
        })
    }
    handleChangeGender(e)
    {
        this.setState({
            gender: e.target.value
        })
    }
    
    handleChangeBirthDay(e)
    {
        this.setState({
            birth_day: e.target.value
        })
    }

    handleChangePhoneContact(e)
    {
        this.setState({
            phone_contact: e.target.value
        })
    }
    
    handleChangeOpenDate(e)
    {
        this.setState({
            opening_date: e.target.value
        })
    }

    handleChangeCloseDate(e)
    {
        this.setState({
            close_date: e.target.value
        })
    }
    
    handleChangeRole(e)
    {
        this.setState({
            role: e.target.value
        })
    }

    handleChangePositionId(e)
    {
        this.setState({
            selectedPosition: e.target.value
        })
    }

    handleChangeCompanyId(e)
    {
        this.setState({
            selectedCompany: e.target.value
        })
    }

    handleChangeWorkSpaceId(e)
    {
        this.setState({
            selectedWorkSpace: e.target.value
        })
    }

    handleChangePassword(e)
    {
        this.setState({
            password: e.target.value
        })
    }

    showPosition()
    {
        if (this.state.position instanceof Array) {
            return this.state.position.map(function (position) {
                return (<option key={position.id} value={position.id}>{position.name}</option>);
            })
        }
    }

    showCompany()
    {
        if (this.state.company instanceof Array) {
            return this.state.company.map(function (company) {
                return (<option key={company.id} value={company.id}>{company.name}</option>);
            })
        }
    }

    showWorkSpace()
    {
        if (this.state.work_space instanceof Array) {
            return this.state.work_space.map(function (work_space) {
                return (<option key={work_space.id} value={work_space.id}>{work_space.name}</option>);
            })
        }
    }

    handleChangeAvatar(e)
    {
        this.setState({
            avatar: this.fileInput.files[0]
        })
    }

    handleSubmit(e)
    {
        e.preventDefault();
        let data = new FormData();
        data.append('code_id', this.state.code_id)
        data.append('name', this.state.name)
        data.append('email', this.state.email)
        data.append('password', this.state.password)
        data.append('card_number', this.state.card_number)
        data.append('gender', this.state.gender)
        data.append('birth_day', this.state.birth_day)
        data.append('phone_contact', this.state.phone_contact)
        data.append('opening_date', this.state.opening_date)
        data.append('close_date', this.state.close_date)
        data.append('role', this.state.role)
        data.append('avatar', this.state.avatar)
        data.append('position_id', this.state.selectedPosition)
        data.append('company_id', this.state.selectedCompany)
        data.append('work_space_id', this.state.selectedWorkSpace)

        post('/users', data)
        .then(
            (response) => {this.props.history.push("/list-user");}
        )
        .catch(error => {
            if (error.response) {
                this.setState({ error: error.response.data.errors});
                console.log(this.state.error);
            }
        });
    }

    render()
    {
        return (
            <div>
                <Nav link="Logout" />  
                <SideBar />
                <h1>Create Users</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Code Id</label>
                                <input value={this.state.code_id} type="text" className="form-control" onChange={this.handleChangeCodeId} />
                                <label className="help-block" >{this.state.error.code_id} </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Name</label>
                                <input value={this.state.name} type="text" className="form-control" onChange={this.handleChangeName} />
                                <label className="help-block" >{this.state.error.name} </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Email</label>
                                <input value={this.state.email} type="text" className="form-control" onChange={this.handleChangeEmail} />
                                <label className="help-block" >{this.state.error.email} </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Password</label>
                                <input value={this.state.password} type="text" className="form-control" onChange={this.handleChangePassword} />
                                <label className="help-block" >{this.state.error.password} </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Card Number</label>
                                <input value={this.state.card_number} type="text" className="form-control" onChange={this.handleChangeCardNumber} />
                                <label className="help-block" >{this.state.error.card_number} </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Gender</label>
                                <select value={this.state.gender} className="form-control" onChange={this.handleChangeGender}>
                                    <option value="">---Option---</option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                                <label className="help-block" >{this.state.error.gender} </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Birth Day</label>
                                <input value={this.state.birth_day} type="date" className="form-control" onChange={this.handleChangeBirthDay} />
                                <label className="help-block" >{this.state.error.birth_day} </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Phone Contact</label>
                                <input value={this.state.phone_contact} type="text" className="form-control" onChange={this.handleChangePhoneContact} />
                                <label className="help-block" >{this.state.error.phone_contact} </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Open Date</label>
                                <input value={this.state.opening_date} type="date" className="form-control" onChange={this.handleChangeOpenDate} />
                                <label className="help-block" >{this.state.error.opening_date} </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Close Date</label>
                                <input value={this.state.close_date} type="date" className="form-control" onChange={this.handleChangeCloseDate} />
                                <label className="help-block" >{this.state.error.close_date} </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Role</label>
                                <select value={this.state.role} className="form-control" onChange={this.handleChangeRole}>
                                    <option value="">---Option---</option>
                                    <option value="1">Admin</option>
                                    <option value="0">User</option>
                                </select>
                                <label className="help-block" >{this.state.error.role} </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Position </label>
                                <select value={this.state.selectePosition} className="form-control" onChange={this.handleChangePositionId}>
                                    {this.showPosition()}
                                </select>
                                <label className="help-block" >{this.state.error.position_id} </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Workspaces </label>
                                <select value={this.state.selectedWorkSpace} className="form-control" onChange={this.handleChangeWorkSpaceId}>
                                    {this.showWorkSpace()}
                                </select>
                                <label className="help-block" >{this.state.error.work_space_id} </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Company </label>
                                <select value={this.state.selectedCompany} className="form-control" onChange={this.handleChangeCompanyId}>
                                    {this.showCompany()}
                                </select>
                                <label className="help-block" >{this.state.error.company_id} </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <label>Avatar</label>
                            <input  type= "file" ref={input => {
                                this.fileInput = input;
                                }} className="form-control col-md-6" onChange={this.handleChangeAvatar}/>
                            <label className="help-block" >{this.state.error.avatar} </label>
                        </div>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <button type = "submit" className="btn btn-primary" >Add Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser;
