import * as ActionTypes from '../Action/Type';

const initialState={
    z:1
};

export default (state=initialState,action)=> {
   
    switch(action.type){
        case ActionTypes.UP_Z:{
            return{...state, z:action.payloadX+state.z}
        }
        default:
            return state;
    }
}