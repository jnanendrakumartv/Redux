import *as ActionTypes from './Type';

export function display(){
    return function(dispatch){
        dispatch({type:"DISPLAY"});
    }
}
export function onChange(){
    return function(dispatch){
        dispatch({type:"SEND"});
    }
}
