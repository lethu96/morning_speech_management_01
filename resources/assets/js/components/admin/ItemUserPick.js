import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

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
                    {this.props.obj.name}
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default ItemUserPick;
