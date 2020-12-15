import React from 'react'

const Person = (props) => {
    const { name, age, job, children } = props
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h2>Job: {job}</h2>
            <p>{children}</p>
        </div>
    )
}

export default Person
