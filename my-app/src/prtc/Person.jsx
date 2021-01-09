import React,{Component} from 'react';
import '../App.css';

const Person = props => {
    return (
        <div className="App">
            <p onClick = { props.click }>My name is { props.name } and I'm { props.age } years old </p>
            <p>{ props.children }</p>
            <input name={props.name} type="text" onChange ={ props.changed } />
        </div>
    )
}
export default Person;