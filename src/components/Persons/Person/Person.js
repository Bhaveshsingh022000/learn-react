import React, {Component} from 'react';
import classesStyle from './Person.module.css';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass';
class Person extends Component{
    render(){
        console.log("person.js rendering...");
        return (
            <React.Fragment>
            <p onClick={this.props.click}>
                I am {this.props.name} and age is {this.props.age}
                </p>
            <p key="i2" >{this.props.children}</p>
            <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
            </React.Fragment>
        );
    } 
    
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classesStyle.Person);