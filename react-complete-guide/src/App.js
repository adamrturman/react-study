import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person'
import { useState, Component, useEffect } from 'react'
import { render } from 'react-dom';


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

    const style = {
      backgroundColor: 'green',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
    style.backgroundColor = 'red';
    style[':hover']= {
      backgroundColor: 'salmon'
    }
  }

  const classes = [];
  if (people.length <= 2) {
    classes.push('red')
  }
  if (people.length <= 1) {
    classes.push('bold')
  }

return (
  <StyleRoot>
  <div className="App">
    <button style={style} onClick={() => togglePersonHandler()}>{showPerson ? 'Hide' : 'Show'}</button> 
    <p className={classes.join(' ')}>List of people below</p>
     {persons}
  </div>
  </StyleRoot>
);
}

//  Class component 
// class App extends Component {
//   state = {
//     person:
//     [
//       {name: "Adam", age:"32", job:"programmer"}, 
//       {name:"Eric", age:"30", job:"entrepeneur"}, 
//       {name:"Joey", age:"28", job:"marketing director"}
//     ]
//   }

//   switchNameHandler = () => {
//     // console.log('was clicked')
//     this.setState({person: [
//       {name: "Mada", age:"32", job:"programmer"}, 
//       {name:"Cire", age:"30", job:"entrepeneur"}, 
//       {name:"Yeoj", age:"28", job:"marketing director"}
//     ] })
//   }

//   render() {

      // const style = {
      //   backgroundColor: 'red',
      //   border: '1px solid blue',
      //   padding: '8px',
      //   cursor: 'pointer'
      // }
//     return (
//     <div className="App">
//       <button style={style} onClick={this.switchNameHandler}>Switch Name</button>
//       <Person name={this.state.person[0].name} age={this.state.person[0].age} job={this.state.person[0].job}></Person>
//       <Person name={this.state.person[1].name} age={this.state.person[1].age} job={this.state.person[1].job} />
//       <Person name={this.state.person[2].name} age={this.state.person[2].age} job={this.state.person[2].job} />
//     </div>
//   );
//   }
// }

export default Radium(App);
