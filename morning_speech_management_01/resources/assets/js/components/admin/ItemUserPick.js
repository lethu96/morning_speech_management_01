import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class ItemUserPick extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <Table.Row >
                <Table.Cell>
                    <Link to={'/user-detail/' + this.props.obj.id}> {this.props.obj.name} </Link>
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default ItemUserPick;
