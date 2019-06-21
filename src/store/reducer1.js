const initialState = {
    w : 1, x : 1, y : 1, z : 1  };
    const  reducer = (state = initialState,action1)=>{
        const newState = {...state};
        switch (action1.type){
            case 'UP_W' : newState.w+=newState.y;
            break;
            case 'UP_X': newState.x+=newState.z;
            break;
            case 'UP_Y':newState.y+=newState.w;
            break;
            case 'UP_Z': newState.z+=newState.x;
            break;
        }
        return newState;  
    }
    export default reducer;