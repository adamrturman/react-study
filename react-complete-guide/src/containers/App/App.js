import styles from  './App.module.css';
import Person from '../../components/Persons/Person/Person'
import LikeButton from '../../LikeButton'
import {  Component } from 'react'
import Persons from '../../components/Persons/Person/Persons'
import Cockpit from '../../components/Cockpit/Cockpit'

//  Function component using hooks
class App extends Component {
  constructor(props){
    super(props);
  }
  state = {
    persons: [
      { id: '1', name: "Adam", age:"32", job:"programmer" }, 
      { id: '2', name:"Eric", age:"30", job:"entrepeneur" }, 
      { id: '3', name:"Joey", age:"28", job:"marketing director" }
    ],
    showPerson : false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state){
    console.log('App.js getDerivedStateFromProps', props);
    return state;
  }
  componentDidMount() {
    console.log("Component did mount")
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("App.js shouldComponentUpdate")
    return true;
  }

  componentDidUpdate() {
    console.log("App.js componentDidUpdate")
  }
    
    nameChangedHandler = (event, id) => {
        //  the personIndex is the one whose id matches the id from the event
        const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
        });

        //  create a new object and use the spread operator to avoid mutating original
        const person = {
          ...this.state.persons[personIndex]
        };

        //  the updated name comes from the input event
        person.name = event.target.value;

        //  make a copy of the array and update it at the targeted index
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        //  set the state to include the updated array
        this.setState({persons: persons})
    }

    togglePersonHandler = () => {
        this.setState({showPerson: !this.state.showPerson})
    }

    deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
    }
  
  render (){
    console.log("app.js render")
  let persons = null;
  

  if (this.state.showPerson) {
    persons = (
        <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler} />
    )
  }
  
  return (
      <div className={styles.App}>
        <button onClick={() => {this.setState({ showCockpit:false })}}>Remove Cockpit</button>
        {this.state.showCockpit ? 
        <Cockpit
          title={this.props.appTitle} 
          showPerson={this.state.showPerson}
          people={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        : null} 
        {persons}
        {/* <LikeButton /> */}
      </div>
    );
  }
}


export default App;
