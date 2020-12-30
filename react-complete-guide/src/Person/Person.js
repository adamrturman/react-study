import React from 'react'
import styled from 'styled-components'
import { render } from 'react-dom'
// import './Person.css'

const StyledDiv = styled.div`
    width: 50%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 15px;
    text-align: center;
    
    @media (min-width: 700px) {
    width: 450px;
    color: blue;
}
`;

const Person = (props) => {
   
    //  Hooks syntax
    const { name, age, job, click, changed } = props
    return (
        // <div className="Person" style={style}>
       <StyledDiv>
            <h1 onClick={click}>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h2>Job: {job}</h2>
            <input type="text" onChange={changed} value={name}></input>
        </StyledDiv>
        
    )

}

export default Person
