import React, { useEffect } from 'react';

import classesStyle from './Cockpit.module.css';

const cockpit = (props) => {


    const Assignedclasses = [];
    let btnClass = '';
    if (props.showPerson) {
        btnClass = classesStyle.Red;
    }

    if (props.persons.length <= 2) {
        Assignedclasses.push(classesStyle.red);
    }
    if (props.persons.length <= 1) {
        Assignedclasses.push(classesStyle.bold);
    }

    return (
        <div className={classesStyle.Cockpit}>
            <h1>{props.title}</h1>
            <p className={Assignedclasses.join(' ')}>this is working</p>
            <button
                className={btnClass}
                onClick={props.clicked} >Switch Button
        </button>
        </div>
    );
};

export default cockpit;