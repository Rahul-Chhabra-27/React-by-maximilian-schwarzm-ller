import React,{ PureComponent } from'react';
import Person from './person/Person' 

 class persons extends PureComponent{
     constructor(props){
         super(props);
         console.log('[Persons.jsx] constructor')
     }
    //  static getDerivedStateFromProps( props, state ){
    //      console.log('[Persons.js] getDerivedStateFromProps' );
    //      return state;
    //  }
    //  shouldComponentUpdate( prevProps, nexState ){
    //      console.log('[Persons.js] shouldComponentUpdate');
    //      if(prevProps.persons !== this.props.persons){
    //          return true;
    //      } else{
    //          return false;
    //      }
    //  }
     getSnapshotBeforeUpdate(prevProps,prevState){
         console.log('[Persons.js] getSnapshotBeforeUpdate');
         return {message:"snapshot!!"};
     }
     componentDidUpdate(prevProps,prevState,snapshot){
         console.log('[Persons.js] componentDidUpdate',prevProps);
         console.log(snapshot);
     }
     componentDidMount(){
         console.log('[Persons.jsx] componentDidMount');
     }
     componentWillUnmount(){
         console.log("componentwillunmount");
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