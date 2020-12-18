import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import { useState, useEffect } from 'react'
import { Component } from 'react'

function App() {
  const [name, setName] = useState('Adam')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div className="App">
      <h1>Assignment #1</h1>
      <UserInput change={handleNameChange} showingName={name} />
      <UserOutput name={name} />
    </div>
  )
}

export default App;
