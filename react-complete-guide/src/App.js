import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <Person name="Adam" age="32" job="software developer"><p>I am</p></Person>
      <Person name="Eric" age="30" job="entrepeneur" />
      <Person name="Joey" age="28" job="marketing director" />
    </div>
  );
}

export default App;
