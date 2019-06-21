import React, { Component } from 'react';
import './Change.css';

class Change extends Component {
    constructor(props) {
    super(props);
    this.state = { name:"", array:[] };
}
handleChange=(event) =>{
    this.setState({name: event.target.value});
}
add=()=>{
    this.state.arry.push(this.state.name);
    this.setState({array:this.state.array});  
}
    
render() {
    return (
        <form id="body" >
            <h1>{this.state.name}</h1>
            <input type='text' onChange={this.handleChange} ></input>
            <button id="button" type="button" onClick={this.add}>Click</button>
            {/* <input type="button" onClick={this.add}></input> */}
            <h1>{this.state.array}</h1>
        </form>
        );
    }
}
export default Change;




