

import * as ActionTypes from '../Action/Type';

const initialState={
    x:1
};

export default (state=initialState,action)=> {
   
    switch(action.type){
        case ActionTypes.UP_X:{
            return{...state, x:action.payloadZ+state.x}
        }
        default:
            return state;
    }
}

// const initialState = {
//     b: 1
//   };
  
//   const reducer = (state = initialState, action) => {
//     if (action.type === "UPDATE_B") {
//       return {
//         ...state,
//         b: action.a + state.b + 1
//       };
//     }
  
//     return state;
//   };
  
//   export default reducer;