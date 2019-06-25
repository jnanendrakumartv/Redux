import React, { Component } from 'react';

class Task4 extends Component {
    constructor(props) {  
        super(props);   
    this.state={ name:'', age:'',city:'',address:'',mobile:'', array:[]   
    }
}
handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value});
    console.log(this.state.name)
}

handleClick=()=>{
    document.getElementById('name').innerHTML=this.state.name;
    document.getElementById('age').innerHTML=this.state.age;
    document.getElementById('city').innerHTML=this.state.city;
    document.getElementById('address').innerHTML=this.state.address;
    document.getElementById('mobile').innerHTML=this.state.mobile;
}
    render() {
        return (
            <div>
                    <label><b>Name : </b> </label>
                    <input type='text' name='name' onChange={this.handleChange} ></input><br></br><br></br>
                    <label><b>Age : </b></label>
                    <input type='text' name='age' onChange={this.handleChange} ></input><br></br><br></br>
                    <label><b>City :</b> </label>
                    <input type='text' name='city' onChange={this.handleChange} ></input><br></br><br></br>
                    <label><b>Address :</b> </label>
                    <input type='text' name='address' onChange={this.handleChange} ></input><br></br><br></br>
                    <label><b>Mobile :</b> </label>
                    <input type='text' name='mobile' onChange={this.handleChange} ></input><br></br><br></br>
                    <button type='button' onClick={this.handleClick}>submit</button> 
                <table>
                    {/* <span>Name</span>
                    <span>Age</span>
                    <span>City</span>
                    <span>Address</span>
                    <span>Mobile</span> */}
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>City</td>
                        <td>Address</td>
                        <td>Mobile</td>
                    </tr>                
                     
                    <tr>
                        <th id="name"></th>
                        <th id="age"></th>
                        <th id="city"></th>
                        <th id="address"></th>
                        <th id="mobile"></th>
                    </tr>

                    {/* <span id="name">Name</span>
                    <span id="age">Age</span>
                    <span id="city">City</span>
                    <span id="address">Address</span>
                    <span id="mobile">Mobile</span> */}

                </table>
            </div>
        );
    }
}
export default Task4;