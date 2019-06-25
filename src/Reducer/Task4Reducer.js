import * as ActionTypes from '../Action/Type';

const intialState = {
   name:'',age:'',city:'',address:'',mobile:'', array :[] };
export default(state=intialState,action)=>{
    switch(action.type){
        case ActionTypes.SEND:{
            return{...state,[action.target.name]:action.target.value}
        }
        case ActionTypes.DISPLAY:{
            return{...state,name:this.state.name,age:this.state.age,city:this.state.city,address:this.state.address,mobile:this.state.mobile}
           
        }
     
        default: return state;
    }
}