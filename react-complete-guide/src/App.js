import './App.css';
import styled from 'styled-components'
import Person from './Person/Person'
import { useState, Component, useEffect } from 'react'
import { render } from 'react-dom';


const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    
    &:hover {
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
      color: black;
      }
`;

//  Function component using hooks
function App() {
  const [people, setPeople] = useState([
    { id: '1', name: "Adam", age:"32", job:"programmer" }, 
    { id: '2', name:"Eric", age:"30", job:"entrepeneur" }, 
    { id: '3', name:"Joey", age:"28", job:"marketing director" }])
  
  const [showPerson, setShowPerson] = useState(false)  


    const nameChangedHandler = (event, id) => {
        //  the personIndex is the one whose id matches the id from the event
        const personIndex = people.findIndex(p => {
          return p.id === id;
        });

        //  create a new object and use the spread operator to avoid mutating original
        const person = {
          ...people[personIndex]
        };

        //  the updated name comes from the input event
        person.name = event.target.value;

        //  make a copy of the array and update it at the targeted index
        const persons = [...people];
        persons[personIndex] = person;

        //  set the state to include the updated array
        setPeople(persons)
    }

    const togglePersonHandler = () => {
        setShowPerson(!showPerson)
    }

    const deletePersonHandler = (personIndex) => {
      const persons = [...people];
      persons.splice(personIndex, 1);
      setPeople(persons)
    }

  let persons = null;

  if (showPerson) {
    persons = (
      <div>
        {people.map((person, index) => {
          return <Person
            key={person.id} 
            name={person.name} 
            age={person.age}
            job={person.job}
            click={() => deletePersonHandler(index)}
            changed={(event) => nameChangedHandler(event, person.id)}
            />
        })}
      </div>
    )
    //  Dynamic stylng for the button within the conditional
  //   style.backgroundColor = 'red';
  //   style[':hover']= {
  //     backgroundColor: 'salmon'
  //   }
  }

  const classes = [];
  if (people.length <= 2) {
    classes.push('red')
  }
  if (people.length <= 1) {
    classes.push('bold')
  }

  return (
      <div className="App">
        <StyledButton alt={showPerson} onClick={() => togglePersonHandler()}>{showPerson ? 'Hide' : 'Show'}</StyledButton> 
        <p className={classes.join(' ')}>List of people below</p>
        {persons}
      </div>
    );
  }


export default App;
