import React from 'react'
import { render } from 'react-dom'
import styles from './Person.module.css'



const Person = (props) => {
   
    const { name, age, job, click, changed } = props
    return (
        // <div className="Person" style={style}>
       <div className={styles.Person}>
            <h1 onClick={click}>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h2>Job: {job}</h2>
            <input type="text" onChange={changed} value={name}></input>
        </div>
        
    )

}

export default Person
