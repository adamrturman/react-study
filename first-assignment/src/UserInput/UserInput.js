import React from 'react'


const UserInput = (props) => {
    return (
        <input 
        onChange={props.change} 
        value={props.showingName} 
        type="text">
        </input>
    )
}

export default UserInput