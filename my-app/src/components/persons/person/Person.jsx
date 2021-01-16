import React from 'react'

class Person extends React.Component { 
    render(){
        console.log('[person.js] rendering...');      // working with props
        return (
            <div>
              <p onClick={this.props.click}>I'm {this.props.name} and my age is {this.props.age}</p>
              <p>{this.props.children}</p>
              <input type = "text" onChange={this.props.changed} value={this.props.name}/>
           </div> 
        );
    } 
};
export default Person;