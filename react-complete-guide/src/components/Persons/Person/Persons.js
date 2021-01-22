import React, { Component } from 'react'
import Person from './Person'

//  single line arrow return
class Persons extends Component{
  static getDerivedStateFromProps(props, state) {
    console.log("Persons.js getDerivedStateFromProps")
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Persons.s shouldComponentUpdate")
    return true;
  }
  
  getSnapshotBeforeUpdate(previousProps, previousState) {
    console.log("Persons.js getSnapshotBeforeUpdate")
    return({message: "Snapshot"})
  }

  componentDidUpdate(previousProps, previousState, snapshot) {
    console.log("Persons.js componentDidUpdate");
    console.log("snapshot", snapshot)
  }
  
    render () {   
    return this.props.persons.map( (person, index) => {
      return <Person
            key={person.id} 
            name={person.name} 
            age={person.age}
            job={person.job}
            click={() => this.props.clicked(index)}
            changed={(event) => this.props.changed(event, person.id)}
            />
      })
  }
}

export default Persons