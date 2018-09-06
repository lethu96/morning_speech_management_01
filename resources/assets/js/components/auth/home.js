import React, { Component } from 'react';
import Nav from './navbar';
import SideBar from './sidebar';

class Home extends Component {
  render() {
    return (
      <div> 
        <Nav link="Logout" />  
        <SideBar />
        <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                            {this.props.children}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
      </div>   
    )
  }
}

export default Home;

