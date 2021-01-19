import React from 'react'
import Person from './Person'

//  single line arrow return
const persons = (props) => props.persons.map( (person, index) => {
        return <Person
          key={person.id} 
          name={person.name} 
          age={person.age}
          job={person.job}
          click={() => props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
          />
    })

export default persons