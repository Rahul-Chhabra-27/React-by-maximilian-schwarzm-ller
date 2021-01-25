import React, { useEffect, useState } from 'react';
import Person from './Person copy';

class Method extends React.Component { // props count recieve

   render(){
       console.log("[Method.js] render");
    return(
        <div>
        <h2>{this.props.count}</h2>
        <button onClick= {this.props.click}>Click me</button>
    </div>
    )    
   }
}
export default Method;