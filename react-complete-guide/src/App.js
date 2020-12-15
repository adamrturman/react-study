import './App.css';
import Person from './Person/Person'
import { useState, Component } from 'react'
// import { render } from 'react-dom';


//  Function component using hooks
function App() {
  const [person, setPerson] = useState([
    {name: "Adam", age:"32", job:"programmer"}, 
    {name:"Eric", age:"30", job:"entrepeneur"}, 
    {name:"Joey", age:"28", job:"marketing director"}])

return (
  <div className="App">
    <Person name={person[0].name} age="32" job="software developer"></Person>
    <Person name={person[1].name} age={person[1].age} job={person[1].job} />
    <Person name={person[2].name} age={person[2].age} job={person[2].job} />
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

//   render() {
//     return (
//     <div className="App">
//       <Person name={this.state.person[0].name} age={this.state.person[0].age} job={this.state.person[0].job}></Person>
//       <Person name={this.state.person[1].name} age={this.state.person[1].age} job={this.state.person[1].job} />
//       <Person name={this.person[2].name} age={this.state.person[2].age} job={this.state.person[2].job} />
//     </div>
//   );
//   }
// }

export default App;
