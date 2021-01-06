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
  nameChangeHandler = (newName) => {   // setState handler
   this.setState({
     person:[
       { name:newName,age:"28" },
       { name:"Manu", age : "29" },
       { name : "RahulChhabra" ,age:"20" }
     ]
   });
  }
  namePassingHanlder = event => {
    console.log(event.target.value)
     this.setState({
      person:[
        { name:'max',age:"28" },
        { name:event.target.value, age : "29" },
        { name : "RahulChhabra" ,age:"20" }
      ]
     });
  }
  render(){
    return(
      <div className="App">
         <h1>I'm React App</h1>
         {console.log(this.state)}
         <button onClick={() => this.nameChangeHandler('Maximilian!!')}>Click me</button>
         <Person
           name={this.state.person[0].name}
           age={this.state.person[0].age} />
         <Person 
           name={this.state.person[1].name} 
           age={this.state.person[1].age} 
           click ={this.nameChangeHandler.bind(this,'max')}
           changed = {this.namePassingHanlder}> Harvard university</Person>
           
         <Person
           name={this.state.person[2].name} 
           age={this.state.person[2].age}>{this.state.university}</Person>
      </div>
    )
  }
}
export default App;
