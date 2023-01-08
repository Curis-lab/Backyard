import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './Components/Index';
import * as React from 'react'

function App() {
  return(
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <Index/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
