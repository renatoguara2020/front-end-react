import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/Login/index';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  path="/login" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;