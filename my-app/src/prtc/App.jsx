import React, { Component } from 'react';
import '../App.css'
import Person from './Person';

// class component
class App extends Component{
    // state
    state = {
        person:[
            { name:"Max" , age :"29" },
            { name:"Mannu" , age:"28" },
            { name:"Rahul" , age:"20" }
        ],
        university : "oxford university",
        count:1,
    }
    // working absolutely fine!!
    switchNameHandler = () =>{
      this.setState({
          person:[
            { name:"Maximilian!!" , age :"29" },
            { name:"Manu" , age:"28" },
            { name:"Rahul" , age:"20" }
          ]
      })
    }
    // working absolutely fine!!
    nameChangeHandler = event => {
        console.log(event.target);
        this.setState({
            person:[
                { name: event.target.value , age :"29" },
                { name:"Manu" , age:"28" },
                { name:"Rahul" , age:"20" }
              ]
        })
    }
    playWithNumber = () => {
        const pre_Value = this.state.count;
       this.setState({
           count:pre_Value+1
       })
    }
   render(){
       const number = [1,2,3,4,5,6,7,8,9,10];
       const flag = true;
       const array = [
        { name:"Maximilian!!" , age :"29" },
        { name:"Manu" , age:"28" },
        { name:"Rahul" , age:"20" }
       ];
       return (
           <div className="App">
                <h1>Hii,I'M a React App!!</h1>
                <p>{this.state.count}</p>
                <button onClick = {this.playWithNumber }>Incr</button>
                <button onClick = { this.switchNameHandler }>Click me</button>
                <div>
                  <h2> {number.filter(data => data>= 5)}</h2>
                  <h2>{array.map(data => data.name + " " + data.age + " " )}</h2>
                  <h2>{flag?"Rahul":"Ram"}</h2>
                </div>
               <Person  
                name={ this.state.person[0].name }
                age={ this.state.person[0].age }
                click = {this.switchNameHandler}
                changed={this.nameChangeHandler}>
                Sharda university</Person>
               <Person
                 name={ this.state.person[1].name }
                 age={ this.state.person[1].age }>
                 Havard university</Person>
               <Person
                name={ this.state.person[2].name }
                age={ this.state.person[2].age }>
                { this.state.university }</Person>
           </div>
       )
   }
}
export default App;