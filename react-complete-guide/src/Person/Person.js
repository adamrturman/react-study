import React from 'react'
import { render } from 'react-dom'

const Person = (props) => {
    //  Hooks syntax
    const { name, age, job, click } = props
    return (
        <div>
            <h1 onClick={click}>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h2>Job: {job}</h2>
        </div>
    )

}

export default Person
