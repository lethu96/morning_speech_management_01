import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class SideBar extends Component {
  render(){
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
              <div className="pull-left image">
                 <img src="/images/dang-luan.jpg" className="img-circle" alt="User Image" />
              </div>
              <div className="pull-left info">
                <p>Tạ Quang Hiếu</p>
                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
              </div>
          </div>
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">Menu</li>
            <li>
              <Link to="list-post">Post</Link>
            </li>
            <li>
              <Link to="list-user">User</Link>
            </li>
            <li>
              <Link to='/create-campaign'>  New Campaign </Link>
            </li>
            <li>
              <Link to="/list-campaign">  List Campaign </Link>
            </li>
          </ul>
        </section>
      </aside> 
    )
  }
}