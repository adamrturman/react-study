import React from 'react'
import { render } from 'react-dom'
import './Person.css'

const Person = (props) => {
    //  Hooks syntax
    const { name, age, job, click, change } = props
    return (
        <div className="Person">
            <h1 onClick={click}>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h2>Job: {job}</h2>
            <input type="text" onChange={change} value={name}></input>
        </div>
    )

}

export default Person
