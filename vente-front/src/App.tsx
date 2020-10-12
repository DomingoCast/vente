import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import './App.css';

import Home from './components/Home/Home';



function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/home" component={Home}/>
            
        </Switch>
    </div>
  );
}

export default App;
