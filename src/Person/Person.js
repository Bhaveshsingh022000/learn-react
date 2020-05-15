import React from 'react';
import classesStyle from './Person.module.css';

const person = (props) => {
    return (
        <div className={classesStyle.Person}>
        <p onClick={props.click}>I am {props.name} and age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;