import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import { get, post } from 'axios';
import { Form } from 'semantic-ui-react';
import Header from './Header';
import ItemPost from './ItemPost';
import { translate, Trans } from 'react-i18next';

export default class DetailUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:'',
        };
    }

    componentDidMount() {
        let current_url = window.location.href;
        let current_id = current_url.split('/').pop();

        get('/users/' + current_id)
        .then(({ data }) => {
            this.setState({
                userInfo: data,
            });
        });
    }

    itemPost() {
        if (this.state.userInfo.post instanceof Array) {
            return this.state.userInfo.post.map((item, i) => {
                return <ItemPost obj={item} key={i} />;
            })
        }
    }

    render() {

        const {userInfo} = this.state;
        const { t, i18n } = this.props;

        return (
                <div> 
                <Header />
                <section className="cover-sec">
                    <img src="/images/cover-img.jpg" alt=""/>
                </section>       
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="main-left-sidebar">
                                            <div className="user_profile">
                                                <div className="user-pro-img">
                                                    <img src={userInfo.avatar} alt=""/>
                                                </div>
                                                <div className="user_pro_status">
                                                    <ul className="flw-status">
                                                        <li>
                                                            <span>{t('following')}</span>
                                                            <b>{userInfo.following}</b>
                                                        </li>
                                                        <li>
                                                            <span>{t('follower')}</span>
                                                            <b>{userInfo.userFollow}</b>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <ul className="social_links">
                                                    <li><a href="#" title=""><i className="fa fa-map-marker"></i> {userInfo.workspace}</a></li>
                                                    <li><a href="#" title=""><i className="fa fa-mobile-phone"></i> {userInfo.phone_contact}</a></li>
                                                    <li><a href="#" title=""><i className="fa fa-envelope-o"></i> {userInfo.email}</a></li>
                                                    <li><a href="#" title=""><i className="fa fa-birthday-cake"></i> {userInfo.birth_day}</a></li>
                                                    <li><a href="#" title=""><i className="fa fa-facebook-square"></i> http://www.facebook.com/yoole</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="main-ws-sec">
                                            <div className="user-tab-sec">
                                                <h3>{userInfo.name}</h3>
                                                <div className="star-descp">
                                                    <span>{userInfo.position}</span>
                                                    <ul>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star-half-o"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-feed-tab current" id="feed-dd">
                                                <div className="posts-section">
                                                    {this.itemPost()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="right-sidebar">
                                            <div className="message-btn">
                                                <a href="#" title=""><i className="fa fa-envelope"></i>{t('message')}</a>
                                            </div>
                                            <div className="widget widget-portfolio">
                                                <div className="wd-heady">
                                                    <h3>{t('image')}</h3>
                                                    <img src="/images/photo-icon.png" alt=""/>
                                                </div>
                                                <div className="pf-gallery">
                                                    <ul>
                                                        <li><a href="#" title=""><img src="/images/pf-gallery1.png" alt=""/></a></li>
                                                        <li><a href="#" title=""><img src="/images/pf-gallery2.png" alt=""/></a></li>
                                                        <li><a href="#" title=""><img src="/images/pf-gallery3.png" alt=""/></a></li>
                                                        <li><a href="#" title=""><img src="/images/pf-gallery4.png" alt=""/></a></li>
                                                        <li><a href="#" title=""><img src="/images/pf-gallery5.png" alt=""/></a></li>
                                                        <li><a href="#" title=""><img src="/images/pf-gallery6.png" alt=""/></a></li>
                                                        <li><a href="#" title=""><img src="/images/pf-gallery7.png" alt=""/></a></li>
                                                        <li><a href="#" title=""><img src="/images/pf-gallery8.png" alt=""/></a></li>
                                                        <li><a href="#" title=""><img src="/images/pf-gallery9.png" alt=""/></a></li>
                                                        <li><a href="#" title=""><img src="/images/pf-gallery10.png" alt=""/></a></li>
                                                        <li><a href="#" title=""><img src="/images/pf-gallery11.png" alt=""/></a></li>
                                                        <li><a href="#" title=""><img src="/images/pf-gallery12.png" alt=""/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </main>
            </div>  
        )
    }
}
