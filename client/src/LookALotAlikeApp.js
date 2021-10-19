import React from 'react'
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Upload from './pages/Upload'
import LookAlikes from './pages/LookAlikes'

export default function App() {

  return (
      <Router>
        <Switch>
          <Route path="/lookalikes">
            <LookAlikes />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  )
}
