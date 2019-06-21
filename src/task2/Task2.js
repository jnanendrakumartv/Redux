import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increaseW,increaseX,increaseY,increaseZ} from '../Action/Task2action';
class Task2 extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th className='space'><h1>{this.props.w}</h1></th>
                        <th className='space'><h1>{this.props.x}</h1></th>
                        <th className='space'><h1>{this.props.y}</h1></th>
                        <th className='space'><h1>{this.props.z}</h1></th>
                        </tr>
                    <tr>
                        <td className='space'><button onClick={()=>this.props.increaseW(this.props.y)}>Update W</button></td>
                        <td className='space'><button onClick={()=>this.props.increaseX(this.props.z)}>Update X</button></td>
                        <td className='space'><button onClick={()=>this.props.increaseY(this.props.w)}>Update Y</button></td>
                        <td className='space'><button onClick={()=>this.props.increaseZ(this.props.x)}>Update Z</button></td>
                    
                    </tr>
                </table>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
 
    const {w}=state.Task2Reducer;
    const {x}=state.Task2Reducer1;
    const {y}=state.Task2Reducer2;
    const {z}=state.Task2Reducer3;
    return {w,x,y,z};
};
export default connect (mapStateToProps,{increaseW,increaseX,increaseY,increaseZ})(Task2)