import React,{useState} from 'react';
import Person from './Person';
import './App.css';

function App1(props){
    const [personState,setpersonState] = useState({
      person:[
            { name : "Max", age: "28" },
            { name : "manu" ,age : "29" },
            { name : "Rahul" , age:"20" }      
      ],
      university:"Anand University"
    });
    const nameChangeHandler = () => {
         setpersonState({
            person:[
                { name : "Maximilian", age: "28" },
                { name : "manu" ,age : "29" },
                { name : "Rahul" , age:"20" }      
         ],
         });
    }
    return(
      <div className="App">
         <h1>I'm React App</h1>
         {console.log(personState)}
         <button onClick={nameChangeHandler}>Click me</button>
         <Person
          name={personState.person[0].name}
          age={personState.person[0].age} />

         <Person
          name={personState.person[1].name} 
          age={personState.person[1].age}>
          Harvard university</Person>

         <Person 
         name={personState.person[2].name} 
         age={personState.person[2].age}>
         {personState.university}</Person>

      </div>
    )
}
export default App1;