import React from 'react'

const  Person = props => { 
    const another = () => {
        console.log("!!triggered");
    } 
    
    console.log('person component');      // working with props
    return (
        <div>
            {another()}
          <p onClick={props.click}>I'm {props.name} and my age is {props.age}</p>
          <p>{props.children}</p>
          <input type = "text" onChange={props.changed} value={props.name}/>
       </div> 
    );
};
export default Person;