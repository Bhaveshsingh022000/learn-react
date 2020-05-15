import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log("Person.js getderiverdstatefromprops");
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log("persons.js ShouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(pevState, nextState){
        console.log("persons.js getSnapShotBeforeUpdate");
        return {message: 'Snapshot!'};
    }
    
    componentDidUpdate(prevState, nextState, snapshot){
        console.log("persons.js comonentDidUpdate");
        console.log(snapshot);
    }

    render() {
        console.log("person.js Rendering");
        return this.props.persons.map((person, index) => {
            return (<Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
            );
        });
    }
};

export default Persons