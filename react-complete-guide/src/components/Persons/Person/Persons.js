import React, { PureComponent } from 'react'
import Person from './Person'

//  single line arrow return
class Persons extends PureComponent{
  static getDerivedStateFromProps(props, state) {
    console.log("Persons.js getDerivedStateFromProps")
    return state;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.persons !== this.props.person || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked !== this.props.clicked) {
  //     console.log("Persons.js shouldComponentUpdate")
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  
  getSnapshotBeforeUpdate(previousProps, previousState) {
    console.log("Persons.js getSnapshotBeforeUpdate")
    return({message: "Snapshot"})
  }

  componentDidUpdate(previousProps, previousState, snapshot) {
    console.log("Persons.js componentDidUpdate");
    console.log("snapshot", snapshot)
  }

  componentWillUnmount() {
    console.log("Persons js componentWillUnmount")
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