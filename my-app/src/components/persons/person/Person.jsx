import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
class Person extends React.Component { 
    render(){
        console.log('[person.js] rendering...');      // working with props
        return(
       <Auxiliary>
              <p onClick={this.props.click}>I'm {this.props.name} and my age is {this.props.age}</p>
              <p>{this.props.children}</p>
              <input type = "text" onChange={this.props.changed} value={this.props.name}/>
      </Auxiliary>
        );
    } 
};

export default withClass(Person);