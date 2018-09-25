import React, { Component } from 'react';
import Nav from './navbar';
import axios from 'axios';
import { translate, Trans } from 'react-i18next';

class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            email : '',
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const {email} = this.state;
        axios.post('api/password/email', {
            email,
        })
        .then(response => {
            this.refs.email.value = '';
            this.setState({err: false});
        })
        .catch(error => {
            this.setState({err: true});
            this.refs.email.value = '';
        });
    }
    
    onChange(e) {
        const email = e.target.value;
        this.setState({email : email});
    }
    
    render() {

        let error = this.state.err ;
        let msg = (!error) ? 'We have e-mailed your password reset link!' : "User doesn't exist";
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
                                         <form className="form-horizontal" role="form" method="POST" onSubmit={this.onSubmit.bind(this)}>
                                            <div className="form-group">
                                                <label for="email" className="col-md-4 control-label">{t('label-email')}</label>
                                                <div className="col-md-6">
                                                    <input id="email" type="email" ref= "email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-6 col-md-offset-4">
                                                   <button type="submit" className="btn btn-primary">
                                                        {t('btn_reset')}
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

export default translate('translations')(Forgot);
