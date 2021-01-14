import React from'react';
import Person from './person/Person' 
const persons = ( props ) => {
    console.log('Person.jsx Main')
   return  props.data.map((person) => {
        return  <Person click={() =>props.delete(person.id)}
                        key = {person.id}
                        changed={(event) =>props.changed(event,person.id)} 
                        name = {person.name} 
                        age={person.age} />
         });
};
export default persons;