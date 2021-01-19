import React from 'react'
import styles from './Cockpit.module.css'

const Cockpit = (props) => {
    const classes = [];
    let btnClass = styles.button;
    // btnClass = styles.button
    if (props.showPerson) {
        btnClass = styles.Red;
    }
    if (props.people.length <= 2) {
      classes.push(styles.red)
    }
    if (props.people.length <= 1) {
      classes.push(styles.bold)
    }
    return (
        <div className={styles.Cockpit}>
            <button className={btnClass} onClick={props.clicked}>{props.showPerson ? 'Hide' : 'Show'}</button> 
            <p className={classes.join(' ')}>List of people below</p>
        </div>
    );
};

export default Cockpit