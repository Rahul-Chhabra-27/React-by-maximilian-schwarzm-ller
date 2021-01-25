import React, { Component } from 'react';
import Method from './Method';
class Index extends Component{
    
    state = {
        count:1,
    }
    IncrCount = () => {
        console.log(this);
        let count = this.state.count+1;
        this.setState({count:count});;
    }
    click(){
        console.log(this);
    }
    render(){
    return (
    <div>
        <button onClick={() => this.click()}> click button</button>
    <h2>{this.state.count}</h2>
    <button onClick={this.IncrCount}>Click me</button>
</div>
    )
    }
    
}
export default Index;

// 1. component creation lifecycle.
// 2.component update lifecycle.