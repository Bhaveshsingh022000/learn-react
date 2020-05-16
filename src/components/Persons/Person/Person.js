import React, {Component} from 'react';
import classesStyle from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component{
    render(){
        console.log("person.js rendering...");
        return (
            <React.Fragment className={classesStyle.Person}>
            <p onClick={this.props.click}>
                I am {this.props.name} and age is {this.props.age}
                </p>
            <p key="i2" >{this.props.children}</p>
            <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
            </React.Fragment>
        );
    } 
    
};

export default Person;