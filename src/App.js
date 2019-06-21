import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Age from './Practice1/Age';
 import Change from './Practice1/Change';
 import Task1 from './task1/Task1';
 import Ageupdown from './Ageupdown';
  import Task2 from './task2/Task2';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/first' component={Age}></Route>
          <Route exact path='/second' component={Change}></Route>
          <Route exact path='/task1' component={Task1}></Route>
          <Route exact path='/wed' component={Ageupdown}></Route>
          <Route exact path='/task2' component={Task2}></Route>
        </Switch>
      </Router> 
    
    </div>
  );
}
export default App;