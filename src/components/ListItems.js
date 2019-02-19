import React, { Component } from 'react';

class ListItems extends Component {


    render() {

        return (

            <tbody>
                <tr>
                <td>{this.props.item.id }</td>
                <td>{this.props.item.name }</td>
                <td>{this.props.item.price }</td>
                </tr>
            </tbody>
        );
    }
}

export default ListItems;