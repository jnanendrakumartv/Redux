import * as ActionTypes from './Type';
export function increaseW(y){

    return function(dispatch){
        dispatch({type:'UP_W',payloadY:y});
    }
}
export function increaseX(z){
    return function(dispatch){
        dispatch({type:'UP_X',payloadZ:z});
    }
}
export function increaseY(w){
    return function(dispatch){
        dispatch({type:'UP_Y',payloadW:w});
    }
}
export function increaseZ(x){
    return function(dispatch){
        dispatch({type:'UP_Z',payloadX:x});
    }
}