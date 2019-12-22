import React from 'react';
import logo from './logo.svg';
import './App.css';
import Images from "./Images";
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ask a Question
        </a>
      </header>

        <Router>
          <Switch>

            <Route path="/Images" component={Images}/>
          </Switch>
        </Router>

    </div>
  );
}

export default App;
