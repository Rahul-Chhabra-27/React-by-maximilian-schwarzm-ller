import React from 'react'

function Person(props){        // working with props
    return (
        <div>
          <p onClick={props.click}>I'm {props.name} and my age is {props.age}</p>
          <p>{props.children}</p>
          <input type = "text" onChange={props.changed} value={props.name}/>
       </div> 
    );
};
export default Person;