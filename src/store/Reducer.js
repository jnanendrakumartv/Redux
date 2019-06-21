const initialState = {
  age :10
};
const reducer = (state = initialState, action1) => {
  const newState = {...state};
  switch (action1.type){
    case 'AGE_UP':
      newState.age ++;
      break;
      case 'AGE_DOWN' :if(newState.age > 0 ) newState.age--;
      break;
  }
  return newState;
  };
  export default reducer;




























