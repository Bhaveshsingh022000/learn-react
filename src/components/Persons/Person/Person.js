import React, {Component} from 'react';
import classesStyle from './Person.module.css';

class Person extends Component{
    render(){
        console.log("person.js rendering...");
        return (
            <div className={classesStyle.Person}>
            <p onClick={this.props.click}>I am {this.props.name} and age is {this.props.age}</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    } 
    
};

export default Person;