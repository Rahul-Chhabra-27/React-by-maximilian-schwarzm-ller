import React, { Component} from 'react';
import Person from './Person'

class Prtc extends Component{
 state = {
      person : [
          { id :  "afa",name:"max",age:"28"},
          { id : "jgkcs ",name:"mannu",age:"29"},
          { id : "mdbvksd", name:"smith",age:"20"}
      ],
      updated : true
  }
    nameChangeHandler = event =>{
        const name = "gary";
        const age = "23";
        const new_array = this.state.person;
        new_array.push({name,age})
           this.setState({
             person:new_array
           })
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
              <Person click = {() =>this.deleteChangeHandler(index)}
               name={person.name}
               age={person.age}
               key={person.id}/>)
               }
            <button onClick={this.nameChangeHandler}>click me</button>
        </div>
    )
   }
}
export default Prtc;