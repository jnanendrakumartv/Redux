import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Age.css';

class Age extends Component {
    render() {
        return (
            <div id="body">
                <h1><b><i>Your Age</i></b></h1>: {this.props.age}<br/>
                <button id="button" onClick={this.props.onAgeUp}>AgeUp</button>
                <button id="button1" onClick={this.props.onAgeDown}>AgeDown</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { age:state.age };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp : () => dispatch({type:"AGE_UP"}),
        onAgeDown : () => dispatch({type:"AGE_DOWN"})
    };
};
export default connect(mapStateToProps,
  mapDispatchToProps)(Age);
