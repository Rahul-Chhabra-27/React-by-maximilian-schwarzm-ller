import React from 'react';
// class component
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props;
    }
    clickHandler = () => {
        this.setState({title:"blue"});
    }
    render(){
        return (
            <div>
               <h1>{this.state.title}</h1> 
                <h1>Hii I'M a React App!!</h1>
                <button onClick={this.clickHandler}> click me</button>
            </div>
            
        )
    }
}
export default App;