import React, { Component } from 'react';
import {connect} from 'react-redux';


class Task1 extends Component {
    render() {
        return (
            <div id="body">
                <table> 
                <tr> 
                    <th className="one"> <h1>{this.props.w}</h1> </th>
                    <th className="one"> <h1>{this.props.x}</h1> </th>
                    <th className="one"> <h1>{this.props.y}</h1> </th>
                    <th className="one"> <h1>{this.props.z}</h1> </th>
                </tr>
                <tr>
                    <td className="one" ><button onClick={this.props.UPW}>UpW</button></td>
                    <td className="one" ><button onClick={this.props.UPX}>UpX</button></td>
                    <td className="one" ><button onClick={this.props.UPY}>UpY</button></td>
                    <td className="one" ><button onClick={this.props.UPZ}>UpZ</button></td>
                </tr>
                </table>
                </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { 
        w:state.w,
        x:state.x,
        y:state.y,
        z:state.z 
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        UPW : () => dispatch({type:"UP_W"}),
        UPX : () => dispatch({type:"UP_X"}),
        UPY : () => dispatch({type:"UP_Y"}),
        UPZ : () => dispatch({type:"UP_Z"})
    };
};
export default connect(mapStateToProps,
  mapDispatchToProps)(Task1);
