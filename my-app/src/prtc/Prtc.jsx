import React, { Component} from 'react';
import Person from './Person'
import Data from './Data';

class Prtc extends Component{
 state = {
      person : Data,
      updated : true
  }
    createNewPerson = event =>{
        const name = "gary";
        const id = "23";
        const new_array = [...this.state.person];
        new_array.push({name,id});
        console.log(this.state.person);
           this.setState({
             person:new_array
           })
   }
   nameChangeHandler = (event,id) =>{
     const personIndex = this.state.person.findIndex((person) => person.id === id);
     const updated_person = {...this.state.person[personIndex]};
     updated_person.name = event.target.value;
     const persons = [...this.state.person];
     persons[personIndex] = updated_person;
     console.log(updated_person.name)
     this.setState({person:persons});
   }

   deleteChangeHandler = (personIndex) => {
    //    const prev_array = this.state.person;
    const prev_array = [...this.state.person];
       prev_array.splice(personIndex,1);
       this.setState({
           person:prev_array
       })
   }
   render(){

       let person;

        // if(this.state.updated){
        //     person = (
        //     <div>
        //         {this.state.updated == true?<h1>true</h1>:<h1>false</h1>}
        //         <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.nameChangeHandler}></Person>
        //         <Person name={this.state.person[1].name} age={this.state.person[1].age}></Person>
        //         <Person name={this.state.person[2].name} age={this.state.person[2].age}></Person>
               
        //     </div>
        //     );
        // }
       
    return (
        <div>
            <h1>Hello I'm React app</h1>
            <h1>enjoying working with react</h1>
            {this.state.person.map((person,index) =>
               <Person
               click = {() =>this.deleteChangeHandler(index)}
               name={person.name}
               age={person.age}
               changed = {(event) =>this.nameChangeHandler(event,person.id)}
               key={person.id}/>)
               }
            <button onClick={this.createNewPerson}>click me</button>
        </div>
    )
   }
}
export default Prtc;