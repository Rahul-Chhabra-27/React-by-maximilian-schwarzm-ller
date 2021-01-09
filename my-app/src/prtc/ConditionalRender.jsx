import React,{Component} from 'react';
import Person from './Person';
import '../index.css';
class ConditionalRender extends Component{
 
    state = {
        showPerson : false ,
    }
    TogglePerson = () => {
        const doesshow = this.state.showPerson;
        this.setState({showPerson : !doesshow})
    }
    render(){
            const style = {
                backgroundColor : 'white',
                font : 'inherit',
                border: '1px solid blue',
                padding:'8px',
                cursor : 'pointer'
            }
            let person = null;
            if(this.state.showPerson){
                person = 
                    <div>
                    <Person name="maximilian" age="28"></Person>
                    <Person name = "manu" age="29"></Person>
                    <Person name = "Rahul" age="20"></Person>
                   </div> 
                } 
        return(
            <div className="App">
               <h1>Hii I'M a React App</h1>
               <button style={style} onClick={this.TogglePerson}>Swich</button>
              <div id= "new_div" ></div>
              <button onClick={this.createComponent}>Click</button>
               {person}
            </div>
        )
    }
}
export default ConditionalRender;