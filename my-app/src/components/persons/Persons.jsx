import React,{Component} from'react';
import Person from './person/Person' 

 class persons extends Component{
    //  static getDerivedStateFromProps( props, state ){
    //      console.log('[Persons.js] getDerivedStateFromProps' );
    //      return state;
    //  }
     shouldComponentUpdate( nextProps, nextState ){
         console.log('[Persons.js] shouldComponentUpdate');
         return true;
     }
     getSnapshotBeforeUpdate(prevProps,prevState){
         console.log('[Persons.js] getSnapshotBeforeUpdate');
         return {message:"snapshot!!"};
     }
     componentDidUpdate(prevProps,prevState,snapshot){
         console.log('[Persons.js] componentDidUpdate',prevProps);
         console.log(snapshot);
     }
    render(){
        console.log('[Persons.js] rendering...');
        return  this.props.data.map((person) => {
            return  <Person click={() =>this.props.delete(person.id)}
                    key = {person.id}
                    changed={(event) =>this.props.changed(event,person.id)} 
                    name = {person.name} 
                    age={person.age} />
            });
        };
 }
export default persons;