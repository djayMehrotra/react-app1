import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.comoponent';
import { SearchBox } from './components/search/search.component';

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

  handleChange = e => {
    this.setState({searchField : e.target.value}, ()=>{console.log(this.state)}) 
  }

  render(){
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1>Monsters Rolodexx</h1>  
        <SearchBox
          placeholder="Search Monster"
          handleChange={ this.handleChange } />
        <CardList monsters={filteredMonsters} /> 
        {/* 
          -earlier the mapping was involved here and that is move to the component
          -the state is passed as an attribute to the component( which is props)
          -filteredd mosnters is passed
        */}
      </div>
    );  
  }
}

export default App;

