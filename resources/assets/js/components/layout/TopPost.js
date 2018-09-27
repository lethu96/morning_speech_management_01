import React, { Component } from 'react';
import { Link, browserHistory, Image } from 'react-router-dom';
import { get } from 'axios';
import swal from 'sweetalert';
import { translate, Trans } from 'react-i18next';

class TopPost extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const { t, i18n } = this.props;

        return (
            <div className="job-info">
                <div className="job-details">
                    <h3><Link to={"/detail-posts/"+this.props.obj.id} > {this.props.obj.title} </Link></h3>
                </div>
                <div>
                    <p>{this.props.obj.total} {t('votes')}</p>
                </div>
            </div>
        );
    }
}

export default translate('translations')(TopPost);
