import *as ActionTypes from './Type';
export function handleClick(){
    return function(dispatch){
        dispatch({type:"CLICK"});
    }
}