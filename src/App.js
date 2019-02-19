import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {

  state = {
    items: [
      { 
        "id": 1,
        "name": "Apples",
        "price": "2"
      },
      { 
        "id": 2,
        "name": "Peaches",
        "price": "5"
      },
      { 
        "id": 3,
        "name": "cherrys",
        "price": "1"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <List list={this.state.items}/>
      </div>
    );
  }
}

export default App;
