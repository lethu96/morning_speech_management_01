import React, { Component } from 'react';
import Nav from './navbar';
import { translate, Trans } from 'react-i18next';

class Index extends Component {
    render() {

        const { t, i18n } = this.props;

        return (
           <div> 
                <Nav />       
                <div className="container text-center  title">
                    <h1> {t('wellcome')}</h1>
                </div> 
           </div>   
        )
    }
}

export default translate('translations')(Index);
