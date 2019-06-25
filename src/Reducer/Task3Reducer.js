import * as ActionTypes from '../Action/Type';

const intialState = {
   name:'',
   password:'',
   message:''
    
};
export default(state=intialState,action)=>{
    switch(action.type){
        case ActionTypes.CLICK:{
            return{...state,message:'Login Suscessfully'}
        }
        default: 
            return state;
    }
}

