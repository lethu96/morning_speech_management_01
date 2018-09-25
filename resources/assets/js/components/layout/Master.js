import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import UserProfile from './UserProfile';
import SuggestUser from './SuggestUser';

class Master extends Component {
    render() {
        return (
           <div> 
                <Header />       
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                <UserProfile />
                                <Main />
                                <SuggestUser />
                                </div>
                            </div>
                        </div> 
                    </div>
                </main>
            </div>   
        )
    }
}

export default Master;
