import React ,{ Component } from 'react';
import axios from 'axios';
import { translate, Trans } from 'react-i18next';


const BASE_URL = 'http://127.0.0.1:8000';

class Reset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: props.match.params.token,
            email : '',
            password: '',
            password_confirmation: '',
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const url = BASE_URL + '/password/reset' ;
        const {token, email, password, password_confirmation} = this.state ;
        axios.post(url, {
           token,
           email,
           password,
           password_confirmation
        })
        .then(response => {
            this.setState({err: false});
            this.props.history.push('login') ;
          })
        .catch(error => {
           this.refs.password.value = '';
           this.refs.email.value = '';
           this.refs.confirm.value = '';
           this.setState({err: true});
        });
    }

    onChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {

        let error = this.state.err ;
        let msg = (!error) ? 'Password Successfully reset' : 'Oops! , Something went wrong';
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger';

        const { t, i18n } = this.props;

        return(
            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">{t('reset')}</div>
                                <div className="panel-body">
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        {error != undefined && <div className={name} role="alert">{msg}</div>}
                                    </div>  
                                    <form className="form-horizontal" role="form"  onSubmit= {this.onSubmit.bind(this)}>
                                        <div className="form-group">
                                            <label for="email" className="col-md-4 control-label">{t('label_email')}</label>
                                            <div className="col-md-6">
                                                <input id="email" type="email" className="form-control" ref="email" name="email" onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="password" className="col-md-4 control-label">{t('password')}</label>
                                            <div className="col-md-6">
                                                <input id="password" type="password" className="form-control" ref="password" name="password" onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="password-confirm" className="col-md-4 control-label">{t('confirm_password')}</label>
                                            <div className="col-md-6">
                                                <input id="password-confirm" type="password" className="form-control" ref="confirm" name="password_confirmation"onChange={this.onChange.bind(this)}  required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-4">
                                                <button type="submit" className="btn btn-primary">
                                                    {t('reset')}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default translate('translations')(Reset);
