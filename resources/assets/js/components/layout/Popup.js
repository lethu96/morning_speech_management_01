import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate, Trans } from 'react-i18next';

export default class Popup extends React.Component {

  render() {
    
    return (
        <div className='popup'>
            <div className='popup_inner'>
            <div className="popup-close"> <button onClick={this.props.closePopup}><i className="fa fa-times-circle"></i></button> </div>
            {(() => {
                if (this.props.listComment === '') {
                    return;
                }
                else
                    return (
                    <div className="post-bar">
                        <div className="post_topbar popup-vote">
                            {this.props.listComment.map(result =>
                                (
                                <div className="usy-dt" key={result.id}>
                                    <img src={result.user.avatar} alt=""/>
                                    <div className="usy-name">
                                        <Link to={'/user-detail/' + result.user.id}>{result.user.name}</Link>
                                        <span>{result.content}</span>
                                    </div>
                                </div>
                                ),
                            )}
                        </div>
                    </div>
                )
            })()}
            </div>
          </div>
        );
    }
}
