import React,{Component} from 'react';
import Data from './Data';
import Person from '../components/persons/Person';
import './Index.css';
import Radium from 'radium';
import Cockpit from '../components/Cockpits/cockpit'
class Prtc2 extends Component{
    constructor( props ){
        super( props );
        console.log('[Prtc.jsx] constructor');
    }
    state = {
        persons:Data,
        isValid:false
    }
    componentWillUnmount(){
        console.log('[Prtc.jsx] componentWllMount ');
    }
    static getDerivedStateFromProps( props , state ){
        console.log( '[Prtc.jsx] getDerivedFromProps', props );
        return state;
    }
    componentDidMount(){
        console.log('[Prtc.jsx] ComponentDidMount');
    }
    deleteComponent = (id) => {
       const personIndex = this.state.persons.findIndex(person => person.id === id);
       const persons = [...this.state.persons];
       persons.splice(personIndex,1);
       console.log(this.state.persons);
       this.setState({persons:persons});
    }
    nameChangeHandler = (event,id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id});
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        // console.log(this.state.persons[personIndex].name);
        this.setState({
            persons:persons,
        })
    }
    toggleperson = () => {
        const prev = this.state.isValid;
        this.setState({isValid:!prev});
    }
    render(){
        console.log( 'render')
        const style = {
            backgroundColor : 'green',
            color:"white",
            font : 'inherit',
            border: '1px solid blue',
            padding:'8px',
            cursor : 'pointer',
            ':hover':{
                backgroundColor:'lightgreen',
                color:"red"
            },
        }
        let person = null;
        if(this.state.isValid){
            person = <Person 
              data = {this.state.persons}
              changed = {this.nameChangeHandler}
              delete = {this.deleteComponent} />

            style.backgroundColor="red";
            style[':hover'] = {
                backgroundColor:"purple",
                color:"black"
            }
           var a = <Cockpit persons = {this.state.persons} 
                 toggleperson = {this.toggleperson}
                 style = {style} />
                 console.log(a);
        }
        return(
            <div className="App">
                 <Cockpit
                  title={this.props.appTitle}
                  persons = {this.state.persons} 
                  toggleperson = {this.toggleperson}
                  style = {style} />
                 {person}
           </div>     
        )
    }
}
export default Radium(Prtc2);
