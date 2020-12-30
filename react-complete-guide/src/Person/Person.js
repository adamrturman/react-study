import React from 'react'
import Radium from 'radium'
import { render } from 'react-dom'
import './Person.css'

const Person = (props) => {
    const style = {
        '@media (min-width: 700px)' : {
            width: '500px'
        }
    }

    //  Hooks syntax
    const { name, age, job, click, changed } = props
    return (
        <div className="Person" style={style}>
            <h1 onClick={click}>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h2>Job: {job}</h2>
            <input type="text" onChange={changed} value={name}></input>
        </div>
    )

}

export default Radium(Person)
