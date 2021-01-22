import React, { Component } from 'react'
import { render } from 'react-dom'
import styles from './Person.module.css'



class Person extends Component {
   render() {
    const { name, age, job, click, changed } = this.props
    return (
        // <div className="Person" style={style}>
       <div className={styles.Person}>
            <h1 onClick={click}>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h2>Job: {job}</h2>
            <input type="number" max="10" type="text" onChange={changed} value={name}></input>
        </div>
        
    )
    }
}

export default Person
