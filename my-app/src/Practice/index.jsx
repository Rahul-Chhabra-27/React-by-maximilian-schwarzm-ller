import React, { Component } from 'react';
import Data from '../prtc/Data';
import Person from './Person copy';
import '../prtc/Index.css';
import Method from './Method'
class Index extends Component{
    
    state  = {
        persons:Data,
        showPerson:true,
    }
    deleteComponentHanlder = ( id ) => {
        const persons = [...this.state.persons];
        const personIndex = persons.findIndex( person => person.id === id);
        persons.splice( personIndex,1 );
        this.setState({  persons:persons  });
    }
    render(){
       const persons = < Method persons = {this.state.persons} 
       deleteComponentHanlder={this.deleteComponentHanlder}
        / >
       return (
           <div className="App">
                <h1> Person manager </h1>
                { persons }
           </div>
       )

    }
}
export default Index;