import React, { Component } from 'react';
import classesStyle from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'jkl', name: 'ABC', age: 21 },
      { id: 'ugu', name: 'DEF', age: 61 },
      { id: 'asf', name: 'GHI', age: 29 }
    ],
    otherState: 'ssacsac',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  tooglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    
    if (this.state.showPersons) {
      persons = 
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
      
    }

    

    return (
      <div className={classesStyle.App}>
        <Cockpit 
        persons = {this.state.persons}
        showPersons = {this.state.showPersons}
        clicked = {this.tooglePersonHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
