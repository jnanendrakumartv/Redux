import React, { Component } from 'react';

class Task4 extends Component {
    constructor(props) {  
        super(props);   
    this.state={ name:'', age:'',city:'',address:'',mobile:'', name1:'', age1:'',city1:'', address1:'',mobile:''  
    }
}
handleChange=(e)=>{
         this.setState({[e.target.name]:e.target.value});
}

handleClick=()=>{
       this.setState({name1:this.state.name,age1:this.state.age,city1:this.state.city,address1:this.state.address,mobile1:this.state.mobile,
       });
 }
    render() {
        return (
            <div>
                <form>
                <label>Name</label><br></br>
                    <input type='text' name='name' onChange={this.handleChange} ></input><br></br>
                    <label>Age</label><br></br>
                    <input type='text' name='age' onChange={this.handleChange} ></input><br></br>
                    <label>City</label><br></br>                    
                    <input type='text' name='city' onChange={this.handleChange} ></input><br></br>
                    <label>Address</label><br></br>                     
                    <input type='text' name='address' onChange={this.handleChange} ></input><br></br>
                    <label>Mobile</label><br></br>
                   <input type ='text' name='mobile' onChange={this.handleChange}></input><br></br>                     <button type='button' onClick={this.handleClick}>submit</button>
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
                         <td >{this.state.name1}</td>
                         <td >{this.state.age1}</td>
                        <td >{this.state.city1}</td>
                        <td >{this.state.address1}</td>
                        <td>{this.state.mobile1}</td>
                    </tr>

                    {/* <span id="name">Name</span>
                    <span id="age">Age</span>
                    <span id="city">City</span>
                    <span id="address">Address</span>
                    <span id="mobile">Mobile</span> */}

                </table>
                </form>
            </div>
        );
    }
}
export default Task4;


// import React, { Component } from 'react';
// // var reqobj={};
// class Task4 extends Component {
//     constructor(props) {  
//         super(props);   
//     this.state={
//         name:'',
//         age:'',
//         city:'',
//         address:'', 
//         name1:'',
//         age1:'',
//         city1:'',
//         address1:'',
 //        mobile1:''
//     }
// }
// handleChange=(e)=>{
//     this.setState({[e.target.name]:e.target.value});
    
// }
// handleClick=()=>{
//     this.setState({name1:this.state.name,age1:this.state.age,city1:this.state.city,address1:this.state.address,mobile1:this.state.mobile,
//     });
// }

//     render() {
//         return (
//             <div >
//                 <form>
//                     <label>Name</label><br></br>
//                     <input type='text' name='name' onChange={this.handleChange} ></input><br></br>
//                     <label>Age</label><br></br>
//                     <input type='text' name='age' onChange={this.handleChange} ></input><br></br>
//                     <label>City</label><br></br>
//                     <input type='text' name='city' onChange={this.handleChange} ></input><br></br>
//                     <label>Address</label><br></br>
//                     <input type='text' name='address' onChange={this.handleChange} ></input><br></br>
//                     <label>Mobile</label><br></br>
//                    <input type ='text' name='mobile' onChange={this.handleChange}></input><br></br>
//                     <button type='button' onClick={this.handleClick}>submit</button>
//                     {/ <input type='button' onClick={this.handleClick} value="click"></input> /}

//                 </form>
//                 <div>
//                 <table>
//                     <tr>
//                         <th >NAME</th>
//                         <th >AGE</th>
//                         <th >CITY</th>
//                         <th>ADDRESS</th>
//                     </tr>
//                     <tr>
//                         <td >{this.state.name1}</td>
//                         <td >{this.state.age1}</td>
//                         <td >{this.state.city1}</td>
//                         <td >{this.state.address1}</td>
//                     </tr>
//                 </table>
//                 </div>
                
//             </div>
//         );
//     }
// }

// export default Task4;