import React from 'react';

class App extends React.Component{
    state = {counter : 1};
    increamentCounter = (increamentValue) =>{
         this.setState((prevState) => ({
           counter: prevState.counter + increamentValue
         }));
    }
     render(){
      return(
       <div>
         <Button  increamentValue={1} onClickFunction = { this.increamentCounter }/>
         <Button  increamentValue={5} onClickFunction = { this.increamentCounter }/>
         <Button  increamentValue={10} onClickFunction = { this.increamentCounter }/>
         <Button  increamentValue={100} onClickFunction = { this.increamentCounter }/>
         <Result counter = { this.state.counter }/>
       </div>
       )
     }
  }