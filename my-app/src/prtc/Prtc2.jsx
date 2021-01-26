import React,{Component} from 'react';
import Data from './Data';
import Person from '../components/persons/Persons';
import './Index.css';
import Radium from 'radium';
import Cockpit from '../components/Cockpits/cockpit'
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';
import PropType from 'prop-types';

class Prtc2 extends Component{
    //  1.component creation lifecycle.
    constructor( props ){
        super( props );
        console.log('Componet Creation Lifecycle begins');
        console.log('[Prtc.jsx] constructor');
    }
    state = {
        persons:Data,
        isValid:true,
        showCockpit:true,
        show:true,
        check:true,
        changeCounter:0,
    }
    componentWillUnmount(){
        console.log('[Prtc.jsx] componentWllMount ');
    }
    static getDerivedStateFromProps( props , state ){
        console.log( '[Prtc.jsx] getDerivedFromProps', props );
        return state;
    }
    shouldComponentUpdate(){
        console.log('[Prtc2.jsx] shouldComponetUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Prtc2.jsx] getSnapshotBeforeUpdate');
        return {message:"stateChanged"};
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Prtc2.jsx] componentDidUpdate',prevState);
        console.log(snapshot);
    }
    // it is used for sending http request to web.
    //  component creation lifecycle.
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
        const personIndex = this.state.persons.findIndex( p =>  p.id === id );
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        // console.log(this.state.persons[personIndex].name);
        this.setState((prevState,props) => {
            return {
                persons:persons,
                changeCounter:prevState.changeCounter + 1,
            };

        });       
    }
    toggleperson = () => {
        const prev = this.state.isValid;
        this.setState({isValid:!prev});
    }
    render(){
        console.log( '[Prtc2.js] render')
       
        let person = null;
        if(this.state.isValid){
            person = <Person 
              data = {this.state.persons}
              changed = {this.nameChangeHandler}
              delete = {this.deleteComponent} />
        }
        return(
          <Aux>
                <button onClick={() => this.setState({showCockpit:false})}>Cockpit</button>
                { this.state.showCockpit?<Cockpit
                  title={this.props.appTitle}
                  personsLength = {this.state.persons.length} 
                  toggleperson = {this.toggleperson}
                  />:null}
                 {person}
          </Aux>   
        )
    }
}
const App = withClass(Prtc2,"App");
export default App;

// component creation.
// start --> constructor --> getDerivedStateFromProps --> render --> child component --> componentDidMount.
// state changes.
// start -->  getDerivedStateFromProps --> componentShouldUpdate --> render --> child component --> 
//  getSnapshotBeforeUpdate  --> componentDidupdate.