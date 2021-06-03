import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.comoponent';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '' 
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
        <input
          type="search" 
          placeholder="Search Monster"
          onChange={ e => {
            this.setState({searchField : e.target.value}, ()=>{console.log(this.state)}) //async behavior of setState
          }}
        />
        <CardList monsters={this.state.monsters} /> 
        {/* 
          -earlier the mapping was involved here and that is move to the component
          -the state is passed as an attribute to the component( which is props)
        */}
      </div>
    );  
  }
}

export default App;

