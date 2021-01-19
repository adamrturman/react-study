import styles from  './App.module.css';
import Person from '../../components/Persons/Person/Person'
import LikeButton from '../../LikeButton'
import { useState, Component, useEffect } from 'react'
import Persons from '../../components/Persons/Person/Persons'
import Cockpit from '../../components/Cockpit/Cockpit'

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
        <Persons 
          persons={people} 
          clicked={deletePersonHandler} 
          changed={nameChangedHandler} />
    )
  }



  return (
      <div className={styles.App}>
        <Cockpit 
          showPerson={showPerson}
          people={people}
          clicked={togglePersonHandler}
        />
        {persons}
        {/* <LikeButton /> */}
      </div>
    );
  }


export default App;
