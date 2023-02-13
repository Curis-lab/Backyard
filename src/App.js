import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as React from 'react'
import Home from './container/Home';
import {Login} from './Components';

function App() {
  return(
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
