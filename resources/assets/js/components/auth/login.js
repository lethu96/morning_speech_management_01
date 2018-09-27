import React, { Component } from 'react';
import Nav from './navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
            role: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const {email , password} = this.state ;
        axios.post('/login', {
            email, 
            password
        })
        .then(response => {
            //this.setState({err: false});
            this.setState({role: response.data.data});
            console.log(response.data);
            this.props.history.push("home") ;
          
        })
        .catch(error => {
            this.refs.email.value = "";
            this.refs.password.value = "";
            //this.setState({err: true});
        });
    }

    onChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

	render() {   
        // let error = this.state.err ;
        // let msg = (!error) ? 'Login Successful' : 'Wrong Credentials';
        // let name = (!error) ? 'alert alert-success' : 'alert alert-danger';
        // let checkRole = this.state.role;

        // if( checkRole == 1 ) {
        //     this.props.history.push("/index")
        // }
        // if( checkRole == 2 ) {
        //     this.props.history.push("/home")
        // }
        // if (checkRole == 0 ) { this.props.history.push("index") ;}
        // else {
        //     this.props.history.push("home") ;
        // }

        return (
            
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-form-title" >
                            <span className="login100-form-title-1">
                                Sign In
                            </span>
                        </div>
                        <div className="col-md-offset-2 col-md-8 col-md-offset-2">
        
                        </div>
                        <form className="login100-form validate-form" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                            <div className="wrap-input100 validate-input m-b-26">
                                <span className="label-input100">Email</span>
                                <input placeholder="Enter Email" className="input100" type="email" ref="email" className="form-control" name="email"  onChange= {this.onChange.bind(this)} required />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-18" >
                                <span className="label-input100">Password</span>
                                <input placeholder="Enter Password"  className="input100" type="password" ref="password" className="form-control" name="password"  onChange= {this.onChange.bind(this)}  required />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="flex-sb-m w-full p-b-30">
                                <div className="contact100-form-checkbox">
                                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                                    <label className="label-checkbox100">
                                     Remember Me
                                    </label>
                                </div>

                                <div>
                                    <Link to = "forgotpassword" className="txt1">Forgot Your Password?</Link>
                                </div>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>    
        );
    }
}
export default Login;
