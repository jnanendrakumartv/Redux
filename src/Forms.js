import React, {Component} from 'react';
import './Forms.css';
class Forms extends Component {
    constructor(props) {  
        super(props); 
        this.state={
        name:'',
        place:'',
        address: '',
        email:''
    }
}
handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    console.log(this.state.name)
}

handleClick=()=> {
const resposneobj={
    name:this.state.name,
    place:this.state.place,
    address: this.state.address,
    email:this.state.email
}
console.log(resposneobj);
}
render () {
    return (
    <div id="body">
        <form>
            <label>Name</label><br></br>
            <input type="text" name='name' onChange={this.handleChange}  ></input><br></br>
            <label>Place</label><br></br>
            <input type="text" name='place' onChange={this.handleChange} ></input><br></br>
            <label>Adress</label><br></br>
            <input type="text" name='address' onChange={this.handleChange} ></input><br></br>
            <label>email</label><br></br>
            <input type="text" name='email' onChange={this.handleChange}></input><br></br><br></br>
            {/* <button id="button" type="button" onClic={this.handleClick}>Submit</button> */}
            <input id="button" type='button' onClick={this.handleClick} value='submit'></input>
            
        </form>    
    </div>
    );
}
}
export default Forms;
