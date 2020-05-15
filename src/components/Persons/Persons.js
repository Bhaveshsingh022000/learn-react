import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state){
    //     console.log("Person.js getderiverdstatefromprops");
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("persons.js ShouldComponentUpdate");
    //     if(nextProps.persons !== this.props.persons){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }

    componentWillUnmount(){
        console.log("persons.js componentwillUnmount");
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