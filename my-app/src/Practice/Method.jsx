import React from 'react';
import Person from './Person copy';

const Method = ( props ) => {
    
    return props.persons.map((person) => <Person id = {person.id} 
    key = {person.id} age={person.age}
    click = {() => props.deleteComponentHanlder(person.id)}
    name = {person.name} />);
    
}
export default Method;