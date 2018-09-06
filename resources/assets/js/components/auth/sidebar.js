import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { translate, Trans } from 'react-i18next';

class SideBar extends Component {
    
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="/images/dang-luan.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>{t('user')}</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> {t('online')}</a>
                        </div>
                    </div>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">{t('menu')}</li>
                        <li>
                            <Link to="list-post">{t('menu-post')}</Link>
                        </li>
                        <li>
                            <Link to="list-user">{t('menu-user')}</Link>
                        </li>
                        <li>
                            <Link to="rank">{t('menu-rank')}</Link>
                        </li>
                        <li>
                            <Link to="random-user">{t('menu-random')}</Link>
                        </li>
                    </ul>
                </section>
            </aside> 
        )
    }
} 

export default  translate('translations')(SideBar);
