import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Table, Menu, Icon, Button } from 'semantic-ui-react';


class PickUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userChoose: [],
        };
     }

    handleSubmit() {
        this.props.updateState(this.props.users)
        this.props.closePopup(false)
    }

    
    render() {
        return (
            <Table celled striped>
                 <Table.Header>
                      <Table.Row>
                           <Table.HeaderCell>Avatar</Table.HeaderCell>
                           <Table.HeaderCell>Name</Table.HeaderCell>
                           <Table.HeaderCell> ACTION </Table.HeaderCell>
                      </Table.Row>
                 </Table.Header>
                 <Table.Body>
                      {this.props.users.map(user =>
                      (    
                           <Table.Row key={user.id} >
                                <Table.Cell><img className="thumb"  src={user.avatar} /></Table.Cell>
                                <Table.Cell>{user.name}</Table.Cell>
                                <Table.Cell>
                                     
                                </Table.Cell>
                           </Table.Row>),
                      )}
                 </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell>
                            <Table.Row>
                                <Table.Cell>
                                    {(() => {
                                    if (this.props.number == this.props.users.length) {
                                        return (
                                            <form onSubmit={this.handleSubmit.bind(this)}>
                                                <input type="submit" value="Choose" className="btn btn-success"/>
                                            </form>
                                            )
                                    }
                                    else
                                        return (
                                        <label className="error"> Item not enough, please refilter</label>
                                    )
                                    })()}  
                                </Table.Cell>
                            </Table.Row>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        );
    }
}

export default PickUser;

