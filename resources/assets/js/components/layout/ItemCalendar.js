import React, { Component } from 'react';
import { get } from 'axios';
import PopupChoosePost from './PopupChoosePost';

class ItemCalendar extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            calendarUpdate : '',
            posts: '',
        };
        this.popupChoose = this.popupChoose.bind(this);
    }


    componentDidMount() {
        get('/choose-post')
        .then(({ data }) => {
            this.setState({
                posts: data,
            });
        });
    }

    updateCalendar(list) {
        this.setState({calendarUpdate: list});
        this.props.newlist(this.state.calendarUpdate)
    }

    popupChoose() {        
        this.setState({
            popup: !this.state.popup
        });
    }

    render()
    {
            return (
            <tr>
                <td className="col-md-4">
                    <div className="flex-row justify-content-between">
                      <div>{this.props.obj.date}</div>
                    </div>
                </td>
                <td data-title="className">
                
                {(() => {
                if (this.props.obj.posts) {
                    return    this.props.obj.posts.title;
                }  
                else
                    return (
                        <input onClick = {this.popupChoose} type="submit" value="Choose posts" className="btn btn-item choose-post" /> 
                    )
                })()}
                </td>
                {this.state.popup ? 
                    <PopupChoosePost
                        closePopup={this.popupChoose.bind(this)}
                        posts={this.state.posts}
                        calendarId={this.props.obj.id}
                        updateCalendar={this.props.newlist}
                    />
                    : null
                }
            </tr>
        );
    }
}

export default ItemCalendar;
