import React, { Component } from 'react';
import classesStyle from './App.module.css';
import Persons from '../components/Persons/Persons';

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
    let btnClass = [classesStyle.Button];
    if (this.state.showPersons) {
      persons = (
        < div >
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
      btnClass.push(classesStyle.Red);
    }

    const Assignedclasses = [];
    if (this.state.persons.length <= 2) {
      Assignedclasses.push(classesStyle.red);
    }
    if (this.state.persons.length <= 1) {
      Assignedclasses.push(classesStyle.bold);
    }

    return (
      <div className={classesStyle.App}>
        <h1>hello</h1>
        <p className={Assignedclasses.join(' ')}>this is working</p>
        <button
          className={btnClass.join(' ')}
          onClick={this.tooglePersonHandler} >Switch Button
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
