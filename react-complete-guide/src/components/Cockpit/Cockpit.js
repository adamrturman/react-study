import React, { useEffect } from 'react'
import styles from './Cockpit.module.css'

const Cockpit = (props) => {
    const classes = [];
    let btnClass = styles.button;
    if (props.showPerson) {
        btnClass = styles.Red;
    }
    if (props.people.length <= 2) {
      classes.push(styles.red)
    }
    if (props.people.length <= 1) {
      classes.push(styles.bold)
    }

    useEffect(() => {
      console.log("Cockpit useEffect")
      //  Faux AJAX
      setTimeout(() => {
        alert("Data is saved")
      }, 1000)
    }, [props.people])

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <button className={btnClass} onClick={props.clicked}>{props.showPerson ? 'Hide' : 'Show'}</button> 
            <p className={classes.join(' ')}>List of people below</p>
        </div>
    );
};

export default Cockpit