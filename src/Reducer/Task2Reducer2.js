import * as ActionTypes from '../Action/Type';

const initialState={
    y:1
};

export default (state=initialState,action)=> {
   
    switch(action.type){
        case ActionTypes.UP_Y:{
            return{...state, y:action.payloadW+state.y}
        }
        default:
            return state;
    }
}