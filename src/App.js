import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as React from 'react';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<div>Hello</div>}/>
      </Routes>
    </Router>
  );
}
export default App;
