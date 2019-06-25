import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleClick} from '../Action/Task3action';


class Task3 extends Component{
    render(){
        return(
            <div id="body"> 
            <form>
            <label>Username : </label>
             <input type='text'/><br></br><br></br>
            <label>Password : </label>
            <input type='text'/><br></br>
            </form><br/>
            <button onClick={this.props.handleClick}>Click</button>
            <h1>{this.props.message}</h1>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    const{name}=state.Task3Reducer;
    const{password}=state.Task3Reducer;
    const{message}=state.Task3Reducer;
    return{name,password,message};
};
export default connect(mapStateToProps,{handleClick})(Task3);