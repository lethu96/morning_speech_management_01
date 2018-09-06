import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


export default class SideBar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="img/chan.jpeg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Admin</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">Menu</li>
                        <li>
                            <Link to="list-post">Post</Link>
                        </li>
                        <li>
                            <Link to="list-user">User</Link>
                        </li>
                        <li>
                            <Link to="rank">Ranking</Link>
                        </li>
                        <li>
                            <Link to="random-user">Random User</Link>
                        </li>
                        <li>
                      
                        </li>
                    </ul>
                </section>
            </aside> 
        )
    }
}
