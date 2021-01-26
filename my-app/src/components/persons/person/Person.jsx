import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
class Person extends React.Component { 
    constructor(props){
        super(props);
        this.inputElement = React.createRef();
    }
    componentDidMount(){
        this.inputElement.current.focus();
    }
    render(){
        console.log('[person.js] rendering...');      // working with props
        return(
       <Auxiliary>
              <p onClick={this.props.click}>I'm {this.props.name} and my age is {this.props.age}</p>
              <p>{this.props.children}</p>
              <input type = "text"
            //    ref= {(inputEl) => {this.inputElement = inputEl} }
               ref = {this.inputElement}
               onChange={this.props.changed} 
               value={this.props.name}/>
      </Auxiliary>
        );
    } 
};
const App = withClass(Person);
Person.propTypes = {
    age:PropTypes.number,
    name:PropTypes.string,
    click:PropTypes.func,
    children:PropTypes.string,
    changed:PropTypes.func,
}
export default App;