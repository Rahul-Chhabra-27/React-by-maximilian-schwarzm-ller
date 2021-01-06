import './App.css';
import React, { Component } from 'react';
import Person from './Person';

class App extends Component{
  state = {
    person:[
           { name : "Max", age: "28" },
           { name : "manu" ,age : "29" },
           { name : "Rahul" , age:"20" }      
    ],
    university:"Anand University"
  }
  nameChangeHandler = () => {
   this.setState({
     person:[
       { name:"Maximilian",age:"28" },
       { name:"Manu", age : "29" },
       { name : "RahulChhabra" ,age:"20" }
     ]
   });
  }
  render(){
    return(
      <div className="App">
         <h1>I'm React App</h1>
         <button onClick={this.nameChangeHandler}>Click me</button>
         <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
         <Person name={this.state.person[1].name} age={this.state.person[1].age}> Harvard university</Person>
         <Person name={this.state.person[2].name} age={this.state.person[2].age}>{this.state.university}</Person>
      </div>
    )
  }
}
// function App() { // working with props
//   const university = "anand university";
//   return (
//     <div className="App">
//        <h1>I'm React App</h1>
//        <Person name="Max" age="28"></Person>
//        <Person name="Manu" age="29"> Harvard university</Person>
//        <Person name="Rahul" age="20" >{university}</Person>
//     </div>
//   );
// }

export default App;
