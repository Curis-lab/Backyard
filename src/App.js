import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as React from 'react'
import Home from './container/Home';
function App() {
  return(
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
