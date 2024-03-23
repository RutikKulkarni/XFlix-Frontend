import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Videopage from './components/VideoPage/VideoPage';
import './App.css';

function App() {
  return (
    <Router>
      <React.StrictMode>
        <div className="App">
          <Switch>
            <Route path="/video/:id">
              <Videopage />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </React.StrictMode>
    </Router>
  );
}

export default App;
