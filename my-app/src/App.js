import './App.css';
import React from 'react';
import Person from './Person';

function App() { // working with props
  const university = "anand university";
  return (
    <div className="App">
       <h1>I'm React App</h1>
       <Person name="Max" age="28"></Person>
       <Person name="Manu" age="29"> Harvard university</Person>
       <Person name="Rahul" age="20" >{university}</Person>
    </div>
  );
}

export default App;
