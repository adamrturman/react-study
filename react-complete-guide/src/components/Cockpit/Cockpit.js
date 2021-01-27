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
      const timer = setTimeout(() => {
        alert("Data is saved")
      }, 1000)
      return () => {
        clearTimeout(timer)
        console.log("Clean up work in useEffect")
      }
      //  the second argument in useEffect is an array of what is compared to trigger useEffect
      //  if no second argument is passed, it will be executed everytime
      //  if an empty array is passed in, it will only run the first time and not again until it is unmounted - equivalent of componentDidMount()
    }, [])

    // No 2nd argument - will run on every update
    useEffect(() => {
      console.log("Cockpit 2nd useEffect")
      return () => {
        console.log("Second Clean up work in useEffect")
      }
    })

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <button className={btnClass} onClick={props.clicked}>{props.showPerson ? 'Hide' : 'Show'}</button> 
            <p className={classes.join(' ')}>List of people below</p>
        </div>
    );
};

export default Cockpit