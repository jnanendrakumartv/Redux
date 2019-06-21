import * as ActionTypes from '../Action/Type';


const initialState={
    w:1
};


export default (state=initialState,action)=> {
   
    switch(action.type){
        case ActionTypes.UP_W:{
            return{...state, w:state.w+action.payloadY}
        }
        
        default:
            return state;
    }
}














// import * as ActionTypes from '../Action/Type';
// const initialState ={
//     X:1
// };
// export default (state = initialState, action)=> {
//     switch (action.type){
//         case ActionTypes.X_UP1:{
//             return {...state, x: state.x + action.y + 1}
//         }
        
//         default:
//             return state;
//     }
// } 




// // const initialState = {
// //     x: 1
// //   };
  
// //   const reducer = (state = initialState, action) => {
// //     if (action.type === "UPDATE_X") {
// //       return {
// //         ...state,
// //         x: state.x + action.y + 1
// //       };
// //     }
  
// //     return state;
// //   };
  
// //   export default Task2Reducer;