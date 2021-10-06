import React from 'react'
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Route1 from './Components/Route1'
import Route2 from './Components/Route2'
import Route3 from './Components/Route3'
import Home from './Components/Home'

function App(){
  return(
    <div>
      <Router>
      <div className="app">
      <Switch>

        <Route path="/route1">
          <Route1/>
        </Route>

        <Route path="/route2">
          <Route2/>
        </Route>

        <Route path="/route3">
          <Route3/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
    </div>
  );
}
export default App;
