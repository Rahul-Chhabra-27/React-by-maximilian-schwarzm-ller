import React from 'react';
import Radium from 'radium'
const Cockpit = ( props ) => {
    let classes = [];
        if(props.persons.length === 3){
            classes.push('blue');
        }
        if(props.persons.length <= 2){
            classes.push('red');
        }
        if(props.persons.length <=1){
            classes.push('bold');
        }
    return(
    <div className="App">

        <h1 className={classes.join(' ')}>Hii I'm a React app!!</h1>
        <h1>{props.title}</h1>
        <button style={props.style} onClick={props.toggleperson}>Toggle Person</button>

    </div>
    )
}
export default Radium(Cockpit);