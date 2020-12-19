import './App.css';
import Person from './Person/Person'
import { useState, Component, useEffect } from 'react'
import { render } from 'react-dom';


//  Function component using hooks
function App() {
  const [person, setPerson] = useState([
    {name: "Adam", age:"32", job:"programmer"}, 
    {name:"Eric", age:"30", job:"entrepeneur"}, 
    {name:"Joey", age:"28", job:"marketing director"}])
  
  const [showPerson, setShowPerson] = useState(false)  

    const switchNameHandler = (newName) => {
      setPerson([
              {name: newName, age:"32", job:"programmer"}, 
              {name:"Cire", age:"30", job:"entrepeneur"}, 
              {name:"Yeoj", age:"28", job:"marketing director"}
            ])
    }

    const nameChangedHandler = (event) => {
        setPerson([
          {name: "Mada", age:"32", job:"programmer"}, 
          {name: event.target.value, age:"30", job:"entrepeneur"}, 
          {name:"Yeoj", age:"28", job:"marketing director"}
        ])
    }

    const togglePersonHandler = () => {
        setShowPerson(!showPerson)
    }

    

    const style = {
      backgroundColor: 'red',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

return (
  <div className="App">
    <button style={style} onClick={() => togglePersonHandler()}>{showPerson ? 'Hide' : 'Show'}</button>
    { showPerson ? 
      <div>
        <Person name={person[0].name} age={person[0].age} job={person[0].job}></Person>
      < Person change={nameChangedHandler} click={switchNameHandler.bind(this, 'Adam!!!')} name={person[1].name} age={person[1].age} job={person[1].job} />
        <Person name={person[2].name} age={person[2].age} job={person[2].job} />
      </div> :
      null }
  </div>
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

export default App;
