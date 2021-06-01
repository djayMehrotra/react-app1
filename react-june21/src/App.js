import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.comoponent';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [] 
    }
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(users=>{
      this.setState({ monsters: users });
    });
  }
  render(){
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );  
  }
}

export default App;


/* 
1 - how to avoid callback hell?
*/