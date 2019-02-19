import React, { Component } from 'react';
import ListItem from './ListItems';
import { Table } from 'react-materialize';

class List extends Component {

    render() {

        const total = this.props.list.reduce(function(res, elemento) {
            return res + Number(elemento.price)}, 0);


        return (
            <Table>
                <thead>
                    <tr>
                        <th data-field="id">Name</th>
                        <th data-field="name">Item Name</th>
                        <th data-field="price">Item Price</th>
                    </tr>
                </thead>

        {
            this.props.list.map( (item) => (
            <ListItem key={item.id} item={item}/>
            ))
        }
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </Table>
        )
    };
}

export default List;